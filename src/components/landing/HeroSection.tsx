"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Shield,
  Lock,
  FileText,
  Sparkles,
  Zap,
  Terminal,
  Cpu,
  Coins,
  BookOpen,
  Star,
  Layers,
} from "lucide-react";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDemo }) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const demoQueries = [
    {
      id: "sla",
      tabTitle: "CloudMesh SLA",
      category: "Engineering",
      docName: "CloudMesh Enterprise SLA 2026.pdf",
      docClause: "Section 2.1 • Clause ¶ 1 (Page 2)",
      sourcePassage:
        "“If CloudMesh fails to meet 99.00% uptime in any billing month, the customer receives an automatic 50% Service Credit. RTO mandates operational failover in <15 minutes with zero loss of transactional state.”",
      query: "What is the exact financial refund if uptime falls below 99.0%?",
      fullAnswer:
        "Falling below **99.00% uptime** triggers the maximum penalty of a **50% Service Credit** on monthly recurring fees. Disaster recovery requires an **RTO < 15 minutes** with zero state loss.",
      citationPill: "Doc 1 • p.2 (Clause 2.1)",
      similarity: "99.4%",
      latency: "142ms",
      tokens: "284 tokens",
      model: "Gemini 1.5 Flash",
    },
    {
      id: "soc2",
      tabTitle: "SOC 2 Runbook",
      category: "Compliance",
      docName: "NexusGuard SOC 2 Standard.pdf",
      docClause: "Section 2.1 • Triage SLAs (Page 2)",
      sourcePassage:
        "“P1 (Critical): Confirmed unauthorized access to customer data or total platform downtime. Response SLA: 15 minutes. Resolution target: < 4 hours. Automated PagerDuty escalation to CISO if unacknowledged within 5 minutes.”",
      query: "What is the mandatory response SLA for a P1 Critical incident?",
      fullAnswer:
        "A P1 Critical incident enforces a strict **15-minute response SLA** with automated PagerDuty escalation to the VP of Engineering and CISO if unacknowledged in 5 minutes. Resolution target is **< 4 hours**.",
      citationPill: "Doc 3 • p.2 (Clause 2.1)",
      similarity: "98.8%",
      latency: "128ms",
      tokens: "260 tokens",
      model: "Gemini 1.5 Flash",
    },
    {
      id: "fintech",
      tabTitle: "FinPulse 10-K",
      category: "Finance",
      docName: "FinPulse FY2026 Financial Report.pdf",
      docClause: "Page 1 • Unit Economics (Page 2)",
      sourcePassage:
        "“Ending ARR reached $28.6M (+130.6% YoY) with Net Revenue Retention climbing to 134.2%. Customer Lifetime Value (LTV) is estimated at $38,200 with blended CAC of $4,250 yielding an LTV:CAC ratio of 8.9x.”",
      query: "What was our ending ARR and blended LTV:CAC unit economics?",
      fullAnswer:
        "Ending ARR reached **$28.6M (+130.6% YoY)** with **134.2% Net Revenue Retention (NRR)**. The LTV:CAC ratio is **8.9x** with an ultra-short **5.8-month payback period**.",
      citationPill: "Doc 2 • p.2 (Clause 2.2)",
      similarity: "99.1%",
      latency: "156ms",
      tokens: "312 tokens",
      model: "Gemini 1.5 Flash",
    },
  ];

  const current = demoQueries[activeQueryIndex];

  // Typewriter effect simulation when changing queries
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText("");
    let currentIdx = 0;
    const textToType = current.fullAnswer;
    const step = 6;

    const interval = setInterval(() => {
      currentIdx += step;
      if (currentIdx >= textToType.length) {
        setDisplayedText(textToType);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayedText(textToType.slice(0, currentIdx));
      }
    }, 22);

    return () => clearInterval(interval);
  }, [activeQueryIndex]);

  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white saas-grid border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Punchy Hero Copy & Primary Value Proposition */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/90 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span>Built for Engineering, Legal & Advisory Teams</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Enterprise Knowledge, <br />
              <span className="text-brand-600">Without the Chaos</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Stop digging through 80-page contracts, dead Notion pages, and Slack threads.
              DocuBrain indexes your company&apos;s scattered documents into one verified neural
              knowledge base — streaming cited answers in 140ms with zero hallucinations.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                <span>4.9</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-slate-700">
                Trusted by 1,200+ high-growth tech teams
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/dashboard"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-button hover:shadow-buttonHover active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
              >
                <span>Launch Live Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={onRequestDemo}
                className="px-5 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-card hover:border-slate-300 transition-all flex items-center gap-2 text-sm"
              >
                <Play className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
                <span>Request Demo</span>
              </button>
            </div>

            {/* Guarantees with Checkmarks */}
            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero model training guarantee — customer data is never leaked</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Upstash Redis sliding-window token guardrails prevent runaway bills</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>SOC 2 Type II compliant multi-tenant architecture</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Interactive Neural RAG Simulator Mockup */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            {/* Interactive Query Tabs Above Window */}
            <div className="flex items-center justify-between px-1 mb-2.5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  Live Neural RAG Playground:
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                10/10 Quota Ready
              </span>
            </div>

            {/* Query Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {demoQueries.map((item, idx) => {
                const isSelected = activeQueryIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveQueryIndex(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? "bg-white border-brand-600 ring-2 ring-brand-500/20 shadow-card"
                        : "bg-slate-50 border-slate-200/80 hover:border-slate-300 hover:bg-white text-slate-600"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-semibold mb-0.5">
                      <span className={isSelected ? "text-brand-600" : "text-slate-500"}>
                        {item.category}
                      </span>
                      <span className="font-mono text-[9px] px-1 rounded bg-slate-100 text-slate-600">
                        {item.similarity}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {item.tabTitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Terminal / Browser Window Mockup */}
            <div className="rounded-2xl border border-slate-800 bg-[#0B1120] shadow-mockup overflow-hidden text-left">
              {/* Chrome Header */}
              <div className="h-10 px-4 bg-[#070D19] border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="text-slate-600 ml-1">|</span>
                  <span className="text-slate-300 text-[11px] ml-1 flex items-center gap-1.5 truncate max-w-[240px]">
                    <Terminal className="w-3 h-3 text-brand-400 shrink-0" />
                    docubrain.ai/query/{current.id}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {current.similarity} Match
                  </span>
                </div>
              </div>

              {/* Verified Query Bar */}
              <div className="p-3 sm:p-3.5 bg-[#0e1626] border-b border-slate-800/90 text-xs text-slate-200 flex items-center gap-2">
                <span className="text-[10px] font-mono text-brand-400 font-bold uppercase tracking-wider shrink-0 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                  Query
                </span>
                <span className="text-slate-300 font-medium truncate">
                  &ldquo;{current.query}&rdquo;
                </span>
              </div>

              {/* Streaming Answer Section */}
              <div className="p-4 sm:p-5 space-y-3.5 bg-[#0B1120]">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                    <span>Streaming Neural RAG Answer</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-400 bg-brand-500/15 px-2 py-0.5 rounded border border-brand-500/25">
                    {isTyping ? "Streaming tokens..." : "100% Grounded"}
                  </span>
                </div>

                {/* Typewriter text output */}
                <div className="p-3.5 rounded-xl bg-[#070D19] border border-slate-800 text-xs text-slate-200 leading-relaxed font-sans min-h-[58px]">
                  <span>{displayedText}</span>
                  {isTyping && (
                    <span className="inline-block w-1.5 h-3.5 bg-brand-400 ml-1 animate-pulse align-middle" />
                  )}
                </div>

                {/* Grounded Source Document Coordinate Box */}
                <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/25 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between text-brand-300 font-mono text-[10px] font-bold uppercase">
                    <span className="flex items-center gap-1 truncate">
                      <FileText className="w-3 h-3 text-brand-400 shrink-0" />
                      {current.docName}
                    </span>
                    <span className="text-emerald-400 shrink-0">{current.docClause}</span>
                  </div>
                  <p className="italic text-slate-300 leading-relaxed font-sans line-clamp-2">
                    {current.sourcePassage}
                  </p>
                </div>

                {/* Citations & Guarantees Row */}
                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-brand-500/15 text-brand-300 border border-brand-500/30">
                    <BookOpen className="w-3 h-3 text-brand-400" />
                    <span>{current.citationPill}</span>
                  </span>

                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    Zero Hallucination
                  </span>
                </div>
              </div>

              {/* Telemetry Status Footer */}
              <div className="px-4 py-2.5 bg-[#070D19] border-t border-slate-800/90 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Cpu className="w-3 h-3 text-brand-400" />
                    {current.model}
                  </span>
                  <span className="flex items-center gap-1 text-brand-400">
                    <Clock className="w-3 h-3" />
                    {current.latency}
                  </span>
                  <span className="text-slate-500 hidden sm:inline">
                    {current.tokens}
                  </span>
                </div>

                <Link
                  href="/dashboard"
                  className="text-xs font-bold text-brand-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Open Studio</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
