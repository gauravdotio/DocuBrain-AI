"use client";

import React from "react";
import { XCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ComparisonSection: React.FC = () => {
  const oldWayItems = [
    "Fragmented documents scattered across Slack, Google Drive, Notion, and Jira",
    "Engineers waste 3+ hours every week asking seniors about API limits & topologies",
    "Outdated Confluence wikis with obsolete code examples and broken links",
    "Blind LLM hallucinations without page numbers or verifiable citations",
    "Unrestricted API loops causing surprise $5,000+ month-end OpenAI invoices",
  ];

  const docuBrainItems = [
    "One unified neural vector index connecting contracts, PRDs, and architecture runbooks",
    "Sub-180ms instant answers streamed directly via Next.js 14 Server-Sent Events",
    "Every claim backed by clickable citation pills that jump to exact page & clause coordinates",
    "Zero model training guarantee — customer data is never stored or used for training",
    "Upstash Redis 24-hour sliding-window guardrail guarantees strict, predictable token costs",
  ];

  return (
    <section id="comparison" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>THE MODERN ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stop Guessing. <br className="hidden sm:inline" />
            <span className="text-brand-600">Start Verifying.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            See how DocuBrain transforms disorganized organizational knowledge into instant, audit-ready technical intelligence.
          </p>
        </div>

        {/* Dual Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* The Old Way */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-9 bg-slate-50/80 border border-slate-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>The Legacy Approach</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">
                Fragmented Wikis & Slack Chaos
              </h3>

              <div className="space-y-4">
                {oldWayItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-400 font-medium">
              Result: 3+ lost hours/engineer/week and high risk of compliance oversights.
            </div>
          </div>

          {/* The DocuBrain Way */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-9 bg-white border-2 border-brand-600 ring-4 ring-brand-50 shadow-mockup flex flex-col justify-between relative">
            <span className="absolute -top-3 right-8 px-3.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-600 text-white tracking-wider uppercase shadow-sm">
              RECOMMENDED
            </span>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>The DocuBrain Way</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">
                Deterministic Grounded Intelligence
              </h3>

              <div className="space-y-4">
                {docuBrainItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-800 leading-relaxed font-sans font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-brand-600 font-bold">100% Verifiable Citations</span>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
              >
                <span>Test in Live Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
