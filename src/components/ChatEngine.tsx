"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChatMessage, Citation, KnowledgeDocument, QueryTelemetry, RateLimitStatus } from "@/types";
import { CitationPill } from "./CitationPill";
import { DOCUMENT_QUESTIONS } from "@/lib/sample-docs";
import {
  Send,
  Square,
  Sparkles,
  Trash2,
  Download,
  AlertTriangle,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  CornerDownLeft,
  Shield,
} from "lucide-react";

interface ChatEngineProps {
  activeDocument: KnowledgeDocument;
  onCitationClick: (citation: Citation) => void;
  rateLimit: RateLimitStatus | null;
  onRateLimitUpdate: (status: RateLimitStatus) => void;
  onResetQuota: () => void;
  onTelemetryUpdate: (telemetry: QueryTelemetry) => void;
  setIsStreamingParent: (streaming: boolean) => void;
  customApiKey?: string;
  demoMode: boolean;
}

export const ChatEngine: React.FC<ChatEngineProps> = ({
  activeDocument,
  onCitationClick,
  rateLimit,
  onRateLimitUpdate,
  onResetQuota,
  onTelemetryUpdate,
  setIsStreamingParent,
  customApiKey,
  demoMode,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const suggestedQuestions = DOCUMENT_QUESTIONS[activeDocument.id] || [
    "What are the primary operational SLAs outlined in this document?",
    "Summarize the key compliance and security standards.",
    "What are the specific penalties and financial refund terms?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = (queryText || inputValue).trim();
    if (!textToSend || isStreaming) return;

    if (rateLimit && rateLimit.isRateLimited) {
      return;
    }

    setInputValue("");
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const assistantPlaceholderId = `asst-${Date.now()}`;
    const assistantMessage: ChatMessage = {
      id: assistantPlaceholderId,
      role: "assistant",
      content: "",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isStreaming: true,
      citations: [],
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setIsStreaming(true);
    setIsStreamingParent(true);

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: textToSend,
          document: activeDocument,
          customApiKey: customApiKey || undefined,
          demoMode,
        }),
        signal: abortController.signal,
      });

      if (response.status === 429) {
        const errorData = await response.json();
        if (errorData.rateLimit) {
          onRateLimitUpdate(errorData.rateLimit);
        }
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantPlaceholderId
              ? {
                  ...m,
                  content:
                    "⚠️ **Daily Query Limit Exceeded (10/10 Queries)**\n\nYou have used all 10 free queries allocated under our Upstash Redis sliding-window quota.\n\n*Click **Reset Demo Quota** below to test again.*",
                  isStreaming: false,
                }
              : m
          )
        );
        setIsStreaming(false);
        setIsStreamingParent(false);
        return;
      }

      if (!response.ok || !response.body) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const dataStr = line.slice(6).trim();
          if (dataStr === "[DONE]") {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantPlaceholderId ? { ...m, isStreaming: false } : m
              )
            );
            break;
          }

          try {
            const parsed = JSON.parse(dataStr);

            if (parsed.type === "init") {
              if (parsed.rateLimit) {
                onRateLimitUpdate(parsed.rateLimit);
              }
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantPlaceholderId
                    ? { ...m, citations: parsed.citations }
                    : m
                )
              );
            } else if (parsed.type === "token") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantPlaceholderId
                    ? { ...m, content: m.content + parsed.text }
                    : m
                )
              );
            } else if (parsed.type === "telemetry") {
              onTelemetryUpdate(parsed.telemetry);
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantPlaceholderId
                    ? { ...m, telemetry: parsed.telemetry, isStreaming: false }
                    : m
                )
              );
            }
          } catch {
            // Partial JSON chunk
          }
        }
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error("Chat error:", err);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantPlaceholderId
              ? {
                  ...m,
                  content: `❌ **Error**: ${err.message || "Failed to communicate with AI engine."}`,
                  isStreaming: false,
                }
              : m
          )
        );
      }
    } finally {
      setIsStreaming(false);
      setIsStreamingParent(false);
      abortControllerRef.current = null;
    }
  };

  const handleStopStreaming = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsStreaming(false);
      setIsStreamingParent(false);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleExportChat = () => {
    const text = messages
      .map((m) => `### ${m.role.toUpperCase()} (${m.timestamp})\n\n${m.content}\n\n---`)
      .join("\n\n");
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `docubrain-chat-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full bg-[#080B11] relative select-text">
      {/* Sleek Chat Top Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1E293B] bg-[#0C121D]/90 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-wide">
            Verified RAG Assistant
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#151F32] text-brand-300 border border-[#1E293B]">
            {demoMode ? "Instant Neural Demo" : "Gemini 1.5 Flash"}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {messages.length > 0 && (
            <>
              <button
                onClick={handleExportChat}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-white hover:bg-[#151F32] rounded-lg transition-colors border border-transparent hover:border-[#1E293B]"
                title="Export transcript as Markdown"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button
                onClick={handleClearChat}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors border border-transparent hover:border-rose-500/20"
                title="Clear conversation"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
        {messages.length === 0 ? (
          /* High-Impact Empty State */
          <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto py-8 px-4 space-y-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 via-accent-violet to-accent-cyan flex items-center justify-center shadow-xl shadow-brand-500/20 border border-brand-400/40">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <Sparkles className="w-4 h-4 text-accent-cyan absolute -top-1 -right-1 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Ask Questions with Verifiable Proof
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Query <strong className="text-slate-200">{activeDocument.title}</strong>. Every streamed answer includes interactive citation pills that highlight the exact source clause.
              </p>
            </div>

            {/* Suggested Prompts Cards */}
            <div className="w-full space-y-2 text-left pt-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                <span>SUGGESTED ENTERPRISE QUERIES:</span>
              </div>
              <div className="space-y-2">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    disabled={rateLimit?.isRateLimited}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0C121D] border border-[#1E293B] hover:border-brand-500/50 hover:bg-[#151F32] text-left transition-all text-xs text-slate-300 hover:text-white group"
                  >
                    <span className="line-clamp-2 leading-relaxed">{q}</span>
                    <Send className="w-3.5 h-3.5 text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity ml-3 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Message Flow */
          messages.map((msg, index) => {
            const isUser = msg.role === "user";

            return (
              <div
                key={msg.id}
                className={`flex gap-3.5 ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-violet flex items-center justify-center shrink-0 border border-brand-400/30 shadow-md mt-0.5">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}

                <div
                  className={`flex flex-col max-w-[88%] sm:max-w-[80%] ${
                    isUser ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-4 py-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed border ${
                      isUser
                        ? "bg-gradient-to-r from-brand-700 to-brand-600 text-white border-brand-500 rounded-tr-none shadow-md shadow-brand-600/20"
                        : "bg-[#0C121D] border-[#1E293B] text-slate-100 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <div className="prose prose-invert prose-xs max-w-none space-y-2 leading-relaxed">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>

                        {msg.isStreaming && (
                          <span className="inline-block w-1.5 h-4 ml-1 bg-brand-400 animate-pulse align-middle" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Interactive Citations Bar */}
                  {!isUser && msg.citations && msg.citations.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mr-1">
                        Verified Sources:
                      </span>
                      {msg.citations.map((citation) => (
                        <CitationPill
                          key={citation.id}
                          citation={citation}
                          onSelect={onCitationClick}
                        />
                      ))}
                    </div>
                  )}

                  {/* Message Meta */}
                  <div className="flex items-center gap-2.5 mt-1.5 px-1 text-[10px] text-slate-500 font-mono">
                    <span>{msg.timestamp}</span>
                    {!isUser && !msg.isStreaming && (
                      <button
                        onClick={() => handleCopy(msg.content, index)}
                        className="hover:text-slate-300 transition-colors flex items-center gap-1"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-[#151F32] border border-[#1E293B] flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Rate Limit Alert */}
      {rateLimit?.isRateLimited && (
        <div className="mx-5 mb-3 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center justify-between text-xs animate-slide-up">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <div>
              <span className="font-semibold text-white">Daily Quota Reached: </span>
              <span>10/10 queries used. Upstash Redis sliding-window limit in effect.</span>
            </div>
          </div>
          <button
            onClick={onResetQuota}
            className="flex items-center gap-1.5 px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-medium transition-colors shrink-0 shadow-sm"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo</span>
          </button>
        </div>
      )}

      {/* Quick Suggestions Chips when chat is active */}
      {messages.length > 0 && !isStreaming && !rateLimit?.isRateLimited && (
        <div className="px-5 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-t border-[#1E293B]/60 bg-[#0A0E17]">
          <span className="text-[10px] font-mono text-slate-500 shrink-0">
            Suggested:
          </span>
          {suggestedQuestions.slice(0, 2).map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-[11px] text-slate-300 hover:text-white bg-[#0C121D] hover:bg-[#151F32] px-3 py-1 rounded-full border border-[#1E293B] truncate max-w-xs transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Modern Floating Chat Input Box */}
      <div className="p-4 border-t border-[#1E293B] bg-[#0C121D]/90 backdrop-blur-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isStreaming || rateLimit?.isRateLimited}
            placeholder={
              rateLimit?.isRateLimited
                ? "Quota limit reached. Click 'Reset Demo' above to continue."
                : `Ask any question about ${activeDocument.title}...`
            }
            className="w-full pl-4 pr-24 py-3.5 rounded-2xl bg-[#151F32]/80 border border-[#1E293B] text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 disabled:opacity-50 transition-colors shadow-inner"
          />

          <div className="absolute right-2 flex items-center gap-1.5">
            {isStreaming ? (
              <button
                type="button"
                onClick={handleStopStreaming}
                className="flex items-center justify-center p-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition-colors shadow-sm"
                title="Stop streaming"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!inputValue.trim() || rateLimit?.isRateLimited}
                className="flex items-center justify-center p-2 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-40 disabled:pointer-events-none text-white transition-all shadow-md shadow-brand-600/30"
                title="Send query (Enter)"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
