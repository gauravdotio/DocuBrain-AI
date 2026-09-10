"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ShieldCheck,
  Zap,
  BookOpen,
  ArrowRight,
  Database,
  Cpu,
  CheckCircle2,
  Lock,
  GitBranch,
  Search,
  Sparkles,
  Share2,
  FileCode,
} from "lucide-react";

export const BentoGridSection: React.FC = () => {
  const [activeChunk, setActiveChunk] = useState(1);

  const connectors = [
    { name: "GitHub Repos", tag: "Markdown & Code", status: "Synced", icon: FileCode, count: "142 files" },
    { name: "Notion Workspaces", tag: "Company Wikis", status: "Active", icon: Layers, count: "38 pages" },
    { name: "Slack Channels", tag: "Engineering & QA", status: "Live Feed", icon: Share2, count: "1.2k messages" },
    { name: "Google Drive / PDFs", tag: "SLA & Contracts", status: "Vectorized", icon: BookOpen, count: "18 docs" },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-subtle">
            <Cpu className="w-3.5 h-3.5 text-brand-600" />
            <span>ARCHITECTURAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Grounded Accuracy, <br className="hidden sm:inline" />
            <span className="text-brand-600">Built for Enterprise Scale</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Every layer of DocuBrain is designed to eliminate hallucinations, enforce predictable token budgets, and deliver verifiable source citations.
          </p>
        </div>

        {/* The 2026 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tile 1: (8 Cols) Deterministic Sliding-Window Vector Chunking */}
          <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-subtle">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  PATENTED CHUNKING PIPELINE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Deterministic Sliding-Window Chunking
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
                Unlike primitive parsers that slice documents arbitrarily, DocuBrain enforces a 350-token semantic window with a 50-token overlap. Every chunk is bound to its exact page number and paragraph coordinate.
              </p>
            </div>

            {/* Interactive Chunking Visualizer */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white font-mono text-xs shadow-mockup">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-brand-400">
                  <GitBranch className="w-3.5 h-3.5" />
                  Vector Buffer Partitioning
                </span>
                <span className="text-emerald-400">● 100% Deterministic</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveChunk(num)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activeChunk === num
                        ? "bg-brand-600/20 border-brand-500 text-white"
                        : "bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span className="font-bold text-brand-300">Chunk #{num}</span>
                      <span>p.{num + 1}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 truncate font-sans">
                      {num === 1 && "350 tokens • SLA Clause 2.1"}
                      {num === 2 && "350 tokens • RTO < 15m Failover"}
                      {num === 3 && "350 tokens • 50% Service Credit"}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-3 text-[11px] text-slate-400 font-sans flex items-center justify-between">
                <span>Overlap window: 50 tokens (guarantees cross-section context preservation)</span>
                <span className="text-brand-400 font-mono font-bold">Sub-15ms lookup</span>
              </div>
            </div>
          </div>

          {/* Tile 2: (4 Cols) Upstash Redis Sliding-Window Cost Guardrail */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-subtle">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                  COST GUARDRAIL
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Upstash Redis Token Budgeting
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Unrestricted LLM APIs bankrupt teams with accidental query loops. Upstash Redis enforces a 24h sliding window that keeps API expenses strictly predictable.
              </p>
            </div>

            {/* Quota Telemetry Widget */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-600">Daily Free Allowance:</span>
                <span className="font-mono text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded">
                  10 / 10 Remaining
                </span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-full" />
              </div>

              <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero surprise charges. Auto-recovers on local fallback.</span>
              </div>
            </div>
          </div>

          {/* Tile 3: (4 Cols) Cryptographic Citation Anchoring */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-subtle">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200/80">
                  PROOF ENGINE
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Cryptographic Citation Anchoring
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Clicking any citation pill scrolls the reader directly to the target clause and illuminates it with a glowing bounding box. Zero blind trust required.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-brand-50 text-brand-700 border border-brand-200">
                <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                <span>Doc 1 • p.2 (Clause 2.1)</span>
              </span>
              <p className="text-xs text-slate-500 font-sans mt-1">
                Target paragraph highlighted with 98.6% confidence rating.
              </p>
            </div>
          </div>

          {/* Tile 4: (8 Cols) One-Click Native Ecosystem Connectors */}
          <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-600 shadow-subtle">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-brand-700 border border-blue-200/80">
                  MULTI-CONNECTOR SYNC
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Connect Scattered Sources Into One Verified Brain
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
                Break down organizational silos. Ingest GitHub repositories, Notion company wikis, Slack incident channels, and Google Drive PDFs with zero maintenance.
              </p>
            </div>

            {/* Connectors Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {connectors.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/70 flex items-center justify-between gap-3 hover:bg-white hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-subtle">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">{c.name}</div>
                        <div className="text-[10px] text-slate-500 truncate">{c.tag} • {c.count}</div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      {c.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
