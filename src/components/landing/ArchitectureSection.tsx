"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  BookOpen,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Database,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features = [
    {
      id: "ingest",
      title: "Document Ingestion & Chunking",
      tabLabel: "Vector Ingestion",
      icon: Layers,
      description:
        "Deterministic sliding-window algorithm that parses 100-page PDFs into 350-token semantic chunks with 50-token overlap, tagging each chunk with page and paragraph coordinates.",
      bulletPoints: [
        "Preserves semantic meaning across section breaks",
        "Deterministic chunk indexing for sub-15ms lookups",
        "Direct support for PDFs, Markdown, TXT, and enterprise contracts",
      ],
      mockupTitle: "Semantic Sliding Window: 350 Tokens • 50 Overlap",
      mockupContent: "Parsing Section 2.1 into vector chunks... 3 pages processed, 14 verified chunks indexed into memory.",
    },
    {
      id: "stream",
      title: "Word-by-Word Streaming RAG",
      tabLabel: "Token Streaming",
      icon: Sparkles,
      description:
        "Server-Sent Events (SSE) streaming engine powered by Google Gemini 1.5 Flash. Delivers fluid typewriter text rendering with sub-180ms Time-to-First-Token.",
      bulletPoints: [
        "Native Server-Sent Events via Next.js 14 Route Handlers",
        "Zero UI lockups or page lag during long answer generation",
        "Rich streaming markdown with code blocks, tables, and lists",
      ],
      mockupTitle: "SSE Stream Active: 158ms TTFT • 42 tokens/sec",
      mockupContent: "Streaming response from Google Gemini 1.5 Flash Vision... token buffer verified with zero dropouts.",
    },
    {
      id: "citations",
      title: "Interactive Clause Citation Pills",
      tabLabel: "Clause Citations",
      icon: BookOpen,
      description:
        "Every factual claim is backed by a clickable citation pill. Clicking a pill auto-scrolls the reader to the exact paragraph and lights it up with a glowing highlight.",
      bulletPoints: [
        "Direct passage jump with synchronized scroll animations",
        "Hover tooltip showing match confidence percentage",
        "Eliminates guesswork and guarantees audit accountability",
      ],
      mockupTitle: "Target Source: CloudMesh SLA p.2 (Clause 2.1)",
      mockupContent: "Active citation pill [Doc 1, p.2] clicked → Reader scrolled to Clause 2.1 with glowing highlight ring.",
    },
    {
      id: "ratelimit",
      title: "Upstash Redis Token Budgeting",
      tabLabel: "Redis Rate Limit",
      icon: ShieldCheck,
      description:
        "Guarantees predictable server costs with a 24-hour sliding-window limiter powered by Upstash Redis. Restricts free users to 10 queries/day to prevent API overages.",
      bulletPoints: [
        "Sliding-window rate limiter via @upstash/ratelimit",
        "Automatic in-memory fallback for local zero-config evaluation",
        "Real-time visual quota meter and 1-click demo reset",
      ],
      mockupTitle: "Upstash Redis: 24h Sliding Window Rate Limiter",
      mockupContent: "Rate limit check: 10 queries daily allowance. Remaining: 9 queries. Window reset in 23h 48m.",
    },
    {
      id: "audit",
      title: "Compliance Audit Trail",
      tabLabel: "Audit Trail",
      icon: FileCheck2,
      description:
        "Full immutable query logging for enterprise security. Every question, retrieved chunk, response latency, and confidence score is recorded for compliance review.",
      bulletPoints: [
        "Meets SOC 2 Type II and GDPR Article 33 traceability standards",
        "Exportable conversation transcripts in Markdown and JSON",
        "Role-based audit inspection for engineering and legal teams",
      ],
      mockupTitle: "SOC 2 Type II Immutable Query Log",
      mockupContent: "Audit record #104 written: User sarah@cloudmesh.io queried SLA penalties. 98% match verified.",
    },
  ];

  const current = features[activeTab];
  const Icon = current.icon;

  return (
    <section id="features" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-semibold">
            <span>Everything in One Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Workspace, From Ingestion to Audit Verification
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Five core building blocks, one connected enterprise system. Select a tab to inspect the pipeline.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
          {features.map((feat, idx) => {
            const TabIcon = feat.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-150 ${
                  isSelected
                    ? "bg-brand-500 border-brand-500 text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isSelected ? "text-white" : "text-brand-500"}`} />
                <span>{feat.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Detail Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50/70 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card">
          {/* Left: Feature description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-md">
              <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              {current.description}
            </p>

            <div className="space-y-2.5 pt-2">
              {current.bulletPoints.map((bp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
              >
                <span>Experience this live in the console</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Interactive Mockup Box */}
          <div className="lg:col-span-6">
            <div className="w-full bg-white rounded-2xl shadow-mockup border border-slate-200 overflow-hidden font-mono text-xs">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-2 text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-tealAccent-400" />
                  {current.mockupTitle}
                </span>
                <span className="text-emerald-400 text-[10px]">● LIVE_VERIFIED</span>
              </div>
              <div className="p-6 space-y-4 bg-slate-900 text-slate-200 font-mono text-xs">
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  {current.mockupContent}
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-brand-300 space-y-2">
                  <div className="text-[10px] uppercase text-slate-400">Telemetry Stream</div>
                  <div className="text-emerald-400">✓ Ingestion Status: 100% Vectorized</div>
                  <div className="text-amber-400">✓ Token Budget: Upstash Redis sliding window</div>
                  <div className="text-cyan-400">✓ Grounding Accuracy: 98.4% Confidence Match</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
