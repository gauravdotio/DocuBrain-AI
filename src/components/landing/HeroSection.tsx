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
  Layers,
  Terminal,
  Cpu,
  Coins,
  BookOpen,
  Search,
  ExternalLink,
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
      tabTitle: "CloudMesh Enterprise SLA",
      category: "Engineering Architecture",
      docName: "CloudMesh Enterprise SLA 2026.pdf",
      docClause: "Section 2.1 • Clause ¶ 1 (Page 2)",
      sourcePassage:
        "“If CloudMesh fails to meet 99.00% uptime in any billing month, the customer receives an automatic 50% Service Credit. RTO mandates operational failover in <15 minutes with zero loss of transactional state.”",
      query: "What is the exact financial refund if uptime falls below 99.0%?",
      fullAnswer:
        "Falling below **99.00% uptime** triggers the maximum contract penalty of a **50% Service Credit** on monthly recurring charges. Disaster recovery requires an **RTO < 15 minutes** with zero state loss.",
      citationPill: "Doc 1 • p.2 (Clause 2.1)",
      similarity: "99.4%",
      latency: "142ms",
      tokens: "284 tokens",
      cost: "$0.000038",
      model: "Gemini 1.5 Flash Vision",
    },
    {
      id: "soc2",
      tabTitle: "SOC 2 Type II Runbook",
      category: "Infosec & Compliance",
      docName: "NexusGuard SOC 2 Type II Standard.pdf",
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
      cost: "$0.000034",
      model: "Gemini 1.5 Flash Vision",
    },
    {
      id: "fintech",
      tabTitle: "FinPulse FY2026 10-K",
      category: "Corporate Financials",
      docName: "FinPulse FY2026 Financial Report.pdf",
      docClause: "Page 1 • Unit Economics (Page 2)",
      sourcePassage:
        "“Ending ARR reached $28.6M (+130.6% YoY) with Net Revenue Retention climbing to 134.2%. Customer Lifetime Value (LTV) is estimated at $38,200 with blended CAC of $4,250 yielding an LTV:CAC ratio of 8.9x.”",
      query: "What was our ending ARR and blended LTV:CAC unit economics?",
      fullAnswer:
        "Ending ARR reached **$28.6M (+130.6% YoY)** with a **134.2% Net Revenue Retention (NRR)**. The LTV:CAC ratio is **8.9x** with an ultra-short **5.8-month payback period**.",
      citationPill: "Doc 2 • p.2 (Clause 2.2)",
      similarity: "99.1%",
      latency: "156ms",
      tokens: "312 tokens",
      cost: "$0.000041",
      model: "Gemini 1.5 Flash Vision",
    },
  ];

  const current = demoQueries[activeQueryIndex];

  // Typewriter effect simulation when changing queries
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText("");
    let currentIdx = 0;
    const textToType = current.fullAnswer;
    const step = 8; // chars per tick for smooth streaming

    const interval = setInterval(() => {
      currentIdx += step;
      if (currentIdx >= textToType.length) {
        setDisplayedText(textToType);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayedText(textToType.slice(0, currentIdx));
      }
    }, 25);

    return () => clearInterval(interval);
  }, [activeQueryIndex]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-white saas-grid saas-grid-mask border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Announcement */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-200/80 bg-brand-50/70 hover:bg-brand-100/80 transition-all text-xs font-semibold text-brand-700 shadow-subtle group"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="font-bold tracking-tight">DocuBrain 2.0 Released</span>
            <span className="text-brand-300">•</span>
            <span className="text-slate-600 font-normal">Deterministic RAG & Token Guardrail</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-600 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
            The Neural Knowledge Brain <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              for High-Velocity Teams
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Stop digging through 80-page contracts, dead Notion pages, and Slack threads.
            DocuBrain indexes your company&apos;s scattered documents into one verified neural
            knowledge base — answers technical queries in 140ms with cryptographic clause citations.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/dashboard"
              className="px-7 py-3.5 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-button hover:shadow-buttonHover active:scale-[0.98] transition-all flex items-center gap-2 text-base"
            >
              <span>Launch Live Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={onRequestDemo}
              className="px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-subtle hover:border-slate-300 transition-all flex items-center gap-2 text-base"
            >
              <Play className="w-4 h-4 text-brand-600 fill-brand-600" />
              <span>Request Enterprise Demo</span>
            </button>
          </div>

          {/* Key Value Guarantees */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Grounded Citations</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-brand-600" />
              <span>Upstash Sliding-Window Token Guard</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-slate-400" />
              <span>SOC 2 Type II Architecture</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SHOWCASE INTERACTIVE LIVE PLAYGROUND (The Portfolio Centerpiece) */}
        {/* ============================================================ */}
        <div className="mt-14 max-w-5xl mx-auto">
          {/* Query Selector Tabs */}
          <div className="flex items-center justify-between px-2 mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                TEST INTERACTIVE NEURAL RETRIEVAL:
              </span>
            </div>
            <span className="text-xs font-mono font-semibold text-brand-600 hidden sm:inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              10/10 Upstash Quota Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
            {demoQueries.map((item, idx) => {
              const isSelected = activeQueryIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveQueryIndex(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? "bg-white border-brand-600 ring-2 ring-brand-500/20 shadow-card"
                      : "bg-slate-50/70 border-slate-200/80 hover:border-slate-300 hover:bg-white text-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
                    <span className={isSelected ? "text-brand-600" : "text-slate-500"}>
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.similarity} Match
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 truncate">
                    {item.tabTitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Browser / Terminal Studio Mockup */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B1120] shadow-mockup overflow-hidden text-left">
            {/* Dark Studio Chrome Header */}
            <div className="h-11 px-4 bg-[#070D19] border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-slate-600 ml-2 hidden sm:inline">|</span>
                <span className="text-slate-300 text-[11px] ml-1 flex items-center gap-1.5 truncate max-w-[280px]">
                  <Terminal className="w-3 h-3 text-brand-400 shrink-0" />
                  docubrain.ai/query/{current.id}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {current.similarity} Grounded Match
                </span>
              </div>
            </div>

            {/* Split Inspection View: Left (Document Source) & Right (RAG Stream) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-[#0B1120]">
              {/* Left Column: Target Document Source Passage (6 cols) */}
              <div className="lg:col-span-6 p-5 sm:p-6 space-y-3.5 bg-[#080E1A]">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-slate-200 font-semibold truncate">
                    <FileText className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span className="truncate">{current.docName}</span>
                  </span>
                  <span className="text-brand-400 font-bold shrink-0">{current.docClause}</span>
                </div>

                {/* Highlighted Verified Passage Coordinate */}
                <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs text-slate-200 leading-relaxed font-sans space-y-2 shadow-sm">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-brand-300 uppercase">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-brand-400" />
                      Synchronized Clause Coordinate
                    </span>
                    <span className="text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/20">
                      Indexed Vector
                    </span>
                  </div>
                  <p className="italic text-slate-200 leading-relaxed font-sans">
                    {current.sourcePassage}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                  <span>Sliding Window: 350t • 50 overlap</span>
                  <span className="text-slate-300 font-semibold">Vector ID: #vec-{current.id}08</span>
                </div>
              </div>

              {/* Right Column: Verified Query & Streaming Answer (6 cols) */}
              <div className="lg:col-span-6 p-5 sm:p-6 space-y-4 bg-[#0B1120]">
                {/* Query Input Box */}
                <div className="bg-[#121B2D] p-3 rounded-xl border border-slate-800 text-xs text-slate-200">
                  <span className="text-[10px] font-mono text-brand-400 font-bold block mb-1">
                    VERIFIED QUERY:
                  </span>
                  &ldquo;{current.query}&rdquo;
                </div>

                {/* Streaming Answer Box */}
                <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-white font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                      <span>Streaming RAG Response</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand-400 bg-brand-500/15 px-2 py-0.5 rounded border border-brand-500/25">
                      {isTyping ? "Streaming tokens..." : "100% Grounded"}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed font-sans min-h-[48px]">
                    {displayedText}
                    {isTyping && (
                      <span className="inline-block w-1.5 h-3.5 bg-brand-400 ml-1 animate-pulse" />
                    )}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-brand-500/15 text-brand-300 border border-brand-500/30">
                      <BookOpen className="w-3 h-3 text-brand-400" />
                      <span>{current.citationPill}</span>
                    </span>

                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Zero Hallucination
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup Telemetry Footer */}
            <div className="px-5 py-3 bg-[#070D19] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1 text-slate-300">
                  <Cpu className="w-3.5 h-3.5 text-brand-400" />
                  {current.model}
                </span>
                <span className="flex items-center gap-1 text-brand-400">
                  <Clock className="w-3.5 h-3.5" />
                  {current.latency} TTFT
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Coins className="w-3.5 h-3.5" />
                  {current.cost}
                </span>
              </div>

              <Link
                href="/dashboard"
                className="text-xs font-bold text-brand-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Launch Full Neural Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


