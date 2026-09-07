import { NextRequest } from "next/server";
import { retrieveContextChunks } from "@/lib/rag";
import { checkRateLimit } from "@/lib/ratelimit";
import { streamGeminiResponse, streamSimulatedResponse } from "@/lib/gemini";
import { calculateCost, estimateTokens } from "@/lib/utils";
import { KnowledgeDocument } from "@/types";

function getClientIdentifier(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
  return `docubrain_user_${ip}`;
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();

  try {
    const body = await req.json();
    const {
      query,
      document,
      customApiKey,
      demoMode = true,
    }: {
      query: string;
      document: KnowledgeDocument;
      customApiKey?: string;
      demoMode?: boolean;
    } = body;

    if (!query || !document) {
      return new Response(JSON.stringify({ error: "Missing query or document" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1. Rate Limiting Check (10 queries/day)
    const identifier = getClientIdentifier(req);
    const rateLimit = await checkRateLimit(identifier, true);

    if (rateLimit.isRateLimited) {
      return new Response(
        JSON.stringify({
          error: "Daily Query Limit Reached",
          message: "You have used all 10 free queries for today under our Redis rate limiting quota.",
          rateLimit,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(rateLimit.resetSeconds),
          },
        }
      );
    }

    // 2. Perform RAG context retrieval
    const { chunks, citations } = retrieveContextChunks(query, document, 3);

    // 3. Determine AI Engine
    const apiKey = customApiKey || process.env.GEMINI_API_KEY || "";
    const isLiveGemini = !demoMode && Boolean(apiKey);

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        // Send initial metadata: citations and rate limit status
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({
              type: "init",
              citations,
              rateLimit,
            })}\n\n`
          )
        );

        let accumulatedAnswer = "";

        try {
          const generator = isLiveGemini
            ? streamGeminiResponse(apiKey, query, chunks, citations)
            : streamSimulatedResponse(query, chunks, citations);

          for await (const chunkText of generator) {
            accumulatedAnswer += chunkText;
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({
                  type: "token",
                  text: chunkText,
                })}\n\n`
              )
            );
          }

          // Calculate final telemetry
          const latencyMs = Date.now() - startTime;
          const promptTokens = estimateTokens(
            chunks.map((c) => c.text).join(" ") + " " + query
          );
          const completionTokens = estimateTokens(accumulatedAnswer);
          const totalTokens = promptTokens + completionTokens;
          const costDollars = calculateCost(promptTokens, completionTokens);

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "telemetry",
                telemetry: {
                  promptTokens,
                  completionTokens,
                  totalTokens,
                  latencyMs,
                  costDollars,
                  engine: isLiveGemini
                    ? "Google Gemini 1.5 Flash"
                    : "Simulated Neural Engine (Demo)",
                },
              })}\n\n`
            )
          );

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (streamErr: any) {
          console.error("Stream generation error:", streamErr);
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "error",
                error: streamErr?.message || "Failed to generate AI response",
              })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-RateLimit-Limit": String(rateLimit.limit),
        "X-RateLimit-Remaining": String(rateLimit.remaining),
      },
    });
  } catch (err: any) {
    console.error("Chat API error:", err);
    return new Response(JSON.stringify({ error: err?.message || "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
