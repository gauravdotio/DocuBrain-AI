"use client";

import React from "react";
import { Layers, Cpu, Database, Shield, Zap, Sparkles, Terminal } from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: Layers,
      title: "Semantic Sliding-Window Chunking",
      description:
        "Documents are parsed into 350-token semantic chunks with 50-token sliding overlap, preserving contextual meaning across paragraph boundaries. Each chunk receives a deterministic page and paragraph coordinate.",
      tag: "lib/rag.ts",
    },
    {
      step: "02",
      icon: Database,
      title: "Sub-15ms Hybrid Context Retrieval",
      description:
        "When a user asks a question, our retrieval engine ranks all indexed chunks using lexical BM25 and term frequency analysis, extracting the top 3 highest-confidence passages for prompt grounding.",
      tag: "Cosine / BM25 Ranking",
    },
    {
      step: "03",
      icon: Cpu,
      title: "Server-Sent Events (SSE) Token Streaming",
      description:
        "Google Gemini 1.5 Flash generates word-by-word streaming markdown through a native ReadableStream. Clients experience typewriter rendering with zero UI freezing or latency spikes.",
      tag: "api/chat (SSE Stream)",
    },
    {
      step: "04",
      icon: Shield,
      title: "Upstash Redis Token Budgeting",
      description:
        "Every incoming query checks a 24-hour sliding window rate limiter via Upstash Redis. Excess traffic is gracefully capped at 10 queries/day with instant recovery and token telemetry.",
      tag: "@upstash/ratelimit",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 border-t border-surface-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-accent-violet/10 text-accent-violet border border-accent-violet/25">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING SPECIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How the DocuBrain RAG Engine Works
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Built from first principles on Next.js 14 App Router, Server-Sent Events, and Redis token budgeting.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-surface-card border border-surface-border hover:border-brand-500/50 transition-all flex flex-col justify-between space-y-5 group relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-slate-600 group-hover:text-brand-400 transition-colors">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-hover text-slate-400 border border-surface-border">
                    {s.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight pt-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Diagram Box */}
        <div id="architecture" className="mt-14 p-6 sm:p-8 rounded-3xl bg-background border border-surface-border font-mono text-xs text-slate-300 overflow-x-auto shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-surface-border text-slate-400 text-[11px]">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              SYSTEM_DATAFLOW_ARCHITECTURE.TXT
            </span>
            <span className="text-brand-400">STATUS: PRODUCTION_READY</span>
          </div>

          <pre className="mt-4 text-[11px] sm:text-xs text-brand-200 leading-relaxed overflow-x-auto">
{`┌───────────────────────────┐       ┌───────────────────────────┐       ┌───────────────────────────┐
│   ENTERPRISE DOCUMENT     │  ──▶  │   SLIDING-WINDOW CHUNKER  │  ──▶  │   SEMANTIC BM25 RANKING   │
│   (PDF / PRD / SLA)       │       │   (350 tokens + 50 overlap)│      │   (Top-3 context clauses) │
└───────────────────────────┘       └───────────────────────────┘       └─────────────┬─────────────┘
                                                                                      │
┌───────────────────────────┐       ┌───────────────────────────┐                     ▼
│  SPLIT WORKSPACE VIEWER   │  ◀──  │    SSE STREAMING PIPELINE │  ◀──  ┌───────────────────────────┐
│  • Word-by-word markdown  │       │    • Google Gemini 1.5    │       │  UPSTASH REDIS RATE LIMIT │
│  • Glowing passage cursor │       │    • Latency: <180ms      │       │  (10 queries/day quota)   │
└───────────────────────────┘       └───────────────────────────┘       └───────────────────────────┘`}
          </pre>
        </div>
      </div>
    </section>
  );
};
