import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, resetLocalRateLimit } from "@/lib/ratelimit";

function getClientIdentifier(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
  return `docubrain_user_${ip}`;
}

export async function GET(req: NextRequest) {
  const identifier = getClientIdentifier(req);
  const status = await checkRateLimit(identifier, false);
  return NextResponse.json(status);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const identifier = getClientIdentifier(req);

    if (body.action === "reset") {
      resetLocalRateLimit(identifier);
      const status = await checkRateLimit(identifier, false);
      return NextResponse.json({ message: "Quota reset successful for demo", ...status });
    }

    const status = await checkRateLimit(identifier, true);
    return NextResponse.json(status);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Rate limit error" }, { status: 500 });
  }
}
