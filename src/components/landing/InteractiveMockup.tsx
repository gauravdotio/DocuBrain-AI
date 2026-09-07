"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Brain,
  FileText,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield,
  Activity,
  Cpu,
  Clock,
  Coins,
  Check,
} from "lucide-react";

export const InteractiveMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"workspace" | "citations" | "telemetry">("workspace");

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl bg-surface-card border border-surface-border shadow-2xl overflow-hidden">
        {/* Glow border on top */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

        {/* Window Chrome / Header */}
        <div className="h-12 border-b border-surface-border bg-surface flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
              console.docubrain.ai/workspace/doc-sla-2026
            </span>
          </div>

          {/* Quick Mockup Filter Buttons */}
          <div className="flex items-center gap-1 bg-surface-card p-1 rounded-xl border border-surface-border text-[11px] font-medium">
            <button
              onClick={() => setActiveTab("workspace")}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === "workspace"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Split Workspace
            </button>
            <button
              onClick={() => setActiveTab("citations")}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === "citations"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Clause Citations
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === "telemetry"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Redis Telemetry
            </button>
          </div>

          <Link
            href="/app"
            className="flex items-center gap-1.5 text-xs font-semibold text-brand-300 hover:text-white transition-colors"
          >
            <span>Open Console</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Mockup Body: Split-Pane Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-background">
          {/* Left Pane: Document Ingestion & Passage (5 cols) */}
          <div className="lg:col-span-5 p-5 border-b lg:border-b-0 lg:border-r border-surface-border bg-surface/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-semibold text-slate-200">
                  CloudMesh Enterprise SLA 2026
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                Page 2 of 3
              </span>
            </div>

            {/* Paragraph with Highlight Glow */}
            <div className="p-4 rounded-xl border border-brand-400/40 bg-brand-500/15 ring-2 ring-brand-500/30 space-y-2 relative">
              <div className="flex items-center justify-between text-[10px] font-mono text-brand-300">
                <span>¶ Paragraph 1 • Section 2.1</span>
                <span className="inline-flex items-center gap-1 bg-brand-500/20 px-2 py-0.5 rounded-full text-brand-200">
                  <Sparkles className="w-3 h-3 text-accent-cyan" />
                  Target Citation Highlight
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                &ldquo;If CloudMesh fails to meet the Guaranteed Uptime Percentage in any calendar month, the customer is eligible to receive Service Credits: <strong>99.90% to &lt; 99.99% Uptime grants 10% credit</strong>; <strong>99.00% to &lt; 99.90% grants 25% credit</strong>; <strong>Less than 99.00% Uptime grants a 50% Service Credit</strong>.&rdquo;
              </p>
            </div>

            {/* Inactive Paragraph */}
            <div className="p-3.5 rounded-xl border border-surface-border bg-surface-card/40 opacity-70 space-y-1">
              <span className="text-[10px] font-mono text-slate-500">¶ Paragraph 2 • Section 2.2</span>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Recovery Time Objective (RTO) dictates restoration under 15 minutes. Recovery Point Objective (RPO) guarantees data loss will not exceed 60 seconds...
              </p>
            </div>
          </div>

          {/* Right Pane: Streaming RAG Output (7 cols) */}
          <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* User Prompt */}
              <div className="flex items-center justify-end">
                <div className="px-4 py-2.5 rounded-2xl rounded-tr-none bg-brand-600 text-white text-xs font-sans max-w-md shadow-md">
                  What is the exact financial penalty if uptime drops below 99.0%?
                </div>
              </div>

              {/* AI Streaming Response */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-violet flex items-center justify-center text-white shadow-sm">
                    <Brain className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-white">DocuBrain RAG Stream</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="p-4 rounded-2xl rounded-tl-none bg-surface-card border border-surface-border text-xs text-slate-200 leading-relaxed font-sans space-y-2">
                  <p>
                    Based on the verified <strong>CloudMesh Enterprise SLA [p. 2]</strong>, dropping below 99.00% uptime triggers the maximum contract penalty:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300">
                    <li>
                      <strong>Less than 99.00% Uptime</strong>: Grants an automatic <strong>50% Service Credit</strong> applied to the subsequent monthly billing cycle.
                    </li>
                    <li>
                      <strong>Disaster Recovery RTO</strong>: Requires full operational failover within <strong>&lt; 15 minutes</strong>.
                    </li>
                  </ul>

                  {/* Citation Pill */}
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Verified Sources:</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-500/15 border border-brand-500/30 text-brand-300">
                      <BookOpen className="w-3 h-3 text-brand-400" />
                      <span>Doc 1, p.2 (¶ 1)</span>
                      <span className="text-[10px] text-emerald-400 font-mono">98% match</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar in Mockup */}
            <div className="pt-3 border-t border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Cpu className="w-3.5 h-3.5 text-brand-400" />
                  Gemini 1.5 Flash
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-accent-amber" />
                  164ms
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Coins className="w-3.5 h-3.5" />
                  $0.000042
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px]">
                <Shield className="w-3 h-3" />
                <span>Upstash Redis: 9/10 Daily Left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
