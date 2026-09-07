"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  Cpu,
  Clock,
  Coins,
  Shield,
  FileText,
  Terminal,
  CheckCircle2,
  Lock,
  Play,
} from "lucide-react";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDemo }) => {
  const [activePreset, setActivePreset] = useState<"sla" | "soc2" | "fintech">("sla");

  const presets = {
    sla: {
      tag: "CloudMesh Enterprise SLA 2026",
      clause: "Section 2.1 • Clause ¶ 1 (Page 2)",
      excerpt:
        "“If CloudMesh fails to meet 99.00% uptime in any billing month, the customer receives an automatic 50% Service Credit. RTO mandates operational failover in <15 minutes with zero loss of transactional state.”",
      query: "What is the exact financial refund if uptime falls below 99.0%?",
      answer:
        "Falling below **99.00% uptime** triggers the maximum contract penalty of a **50% Service Credit** on monthly recurring charges. Disaster recovery requires an **RTO < 15 minutes**.",
      citation: "Doc 1 • p.2 (Clause 2.1)",
      latency: "154ms",
      tokens: "318 tokens",
      cost: "$0.000042",
    },
    soc2: {
      tag: "NexusGuard SOC 2 Type II Standard",
      clause: "Section 2.1 • Triage SLAs (Page 2)",
      excerpt:
        "“P1 (Critical): Confirmed unauthorized access to customer data or total platform downtime. Response SLA: 15 minutes. Resolution target: < 4 hours. Automated PagerDuty escalation to CISO if unacknowledged within 5 minutes.”",
      query: "What is the mandatory response SLA for a P1 Critical incident?",
      answer:
        "A P1 Critical incident enforces a strict **15-minute response SLA** with automated PagerDuty escalation to the VP of Engineering and CISO if unacknowledged in 5 minutes.",
      citation: "Doc 3 • p.2 (Clause 2.1)",
      latency: "142ms",
      tokens: "284 tokens",
      cost: "$0.000038",
    },
    fintech: {
      tag: "FinPulse FY2026 Financial Report",
      clause: "Page 1 • Unit Economics (Page 2)",
      excerpt:
        "“Ending ARR reached $28.6M (+130.6% YoY) with Net Revenue Retention climbing to 134.2%. Customer Lifetime Value (LTV) is estimated at $38,200 with blended CAC of $4,250 yielding an LTV:CAC ratio of 8.9x.”",
      query: "What was our ending ARR and blended LTV:CAC unit economics?",
      answer:
        "Ending ARR reached **$28.6M (+130.6% YoY)** with a **134.2% Net Revenue Retention (NRR)**. The LTV:CAC ratio is **8.9x** with an ultra-short **5.8-month payback period**.",
      citation: "Doc 2 • p.2 (Clause 2.2)",
      latency: "168ms",
      tokens: "342 tokens",
      cost: "$0.000045",
    },
  };

  const current = presets[activePreset];

  return (
    <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-28 overflow-hidden neural-grid border-b border-ink-700/70">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-iris-600/20 via-amberAccent-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink-800/90 border border-ink-700 text-amberAccent-400 text-xs font-mono mb-8 animate-fade-in shadow-sm">
          <Terminal className="w-3.5 h-3.5 text-amberAccent-400" />
          <span>NEURAL RAG ENGINE • CITATION HIGHLIGHTING • REDIS GUARDRAIL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-5xl mx-auto">
          Search 100-Page Contracts & Specs. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amberAccent-400 via-iris-400 to-amberAccent-300 bg-clip-text text-transparent">
            Get Answers With Verifiable Proof.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-ink-300 max-w-3xl mx-auto leading-relaxed font-sans">
          Stop manually scanning 80-page agreements and waiting on Slack replies. DocuBrain AI indexes complex documents and streams factual answers grounded in verified clause coordinates, protected by Upstash Redis token budgeting.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-ink-950 bg-gradient-to-r from-amberAccent-400 via-amberAccent-500 to-amberAccent-400 hover:brightness-110 active:scale-[0.98] rounded-xl shadow-glowAmber transition-all duration-150 flex items-center justify-center gap-2"
          >
            <span>Launch Neural Console</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-ink-200 hover:text-white bg-ink-850 hover:bg-ink-800 border border-ink-700 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-amberAccent-400 fill-amberAccent-400" />
            <span>Request Walkthrough</span>
          </button>
        </div>

        {/* Interactive Command Palette Selector in Hero */}
        <div className="mt-14 max-w-5xl mx-auto text-left">
          <div className="flex items-center justify-between px-2 mb-3">
            <span className="text-[11px] font-mono text-ink-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amberAccent-400" />
              SELECT AN ENTERPRISE KNOWLEDGE SOURCE:
            </span>
            <span className="text-[11px] font-mono text-emerald-400">
              ● 10/10 UPSTASH ALLOWANCE ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
            <button
              onClick={() => setActivePreset("sla")}
              className={`p-3 rounded-xl border text-left transition-all ${
                activePreset === "sla"
                  ? "bg-ink-800 border-amberAccent-500/80 shadow-glowAmber"
                  : "bg-ink-850/60 border-ink-700/80 hover:bg-ink-800 hover:border-ink-600"
              }`}
            >
              <div className="text-[10px] font-mono text-amberAccent-400 uppercase font-semibold">
                Enterprise SLA
              </div>
              <div className="text-xs font-bold text-white mt-0.5 truncate">
                CloudMesh 99.99% Agreement
              </div>
            </button>

            <button
              onClick={() => setActivePreset("soc2")}
              className={`p-3 rounded-xl border text-left transition-all ${
                activePreset === "soc2"
                  ? "bg-ink-800 border-amberAccent-500/80 shadow-glowAmber"
                  : "bg-ink-850/60 border-ink-700/80 hover:bg-ink-800 hover:border-ink-600"
              }`}
            >
              <div className="text-[10px] font-mono text-iris-400 uppercase font-semibold">
                InfoSec & Audit
              </div>
              <div className="text-xs font-bold text-white mt-0.5 truncate">
                NexusGuard SOC 2 Playbook
              </div>
            </button>

            <button
              onClick={() => setActivePreset("fintech")}
              className={`p-3 rounded-xl border text-left transition-all ${
                activePreset === "fintech"
                  ? "bg-ink-800 border-amberAccent-500/80 shadow-glowAmber"
                  : "bg-ink-850/60 border-ink-700/80 hover:bg-ink-800 hover:border-ink-600"
              }`}
            >
              <div className="text-[10px] font-mono text-mint-400 uppercase font-semibold">
                Financial Operations
              </div>
              <div className="text-xs font-bold text-white mt-0.5 truncate">
                FinPulse FY2026 10-K Metrics
              </div>
            </button>
          </div>

          {/* Live Dual-Pane Inspector Canvas */}
          <div className="rounded-2xl bg-ink-900 border border-ink-700 shadow-studio overflow-hidden">
            {/* Inspector Window Bar */}
            <div className="h-10 px-4 bg-ink-950 border-b border-ink-700/80 flex items-center justify-between text-xs font-mono text-ink-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-ink-500 ml-2 hidden sm:inline">|</span>
                <span className="text-ink-300 text-[11px] ml-1 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-amberAccent-400" />
                  docubrain.ai/query/{activePreset}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  100% Grounded
                </span>
              </div>
            </div>

            {/* Split Inspection View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-ink-700/80 bg-ink-900/90">
              {/* Left: Source Document Passage (6 cols) */}
              <div className="lg:col-span-6 p-5 sm:p-6 space-y-3 bg-ink-850/40">
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-400">
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <FileText className="w-3.5 h-3.5 text-amberAccent-400" />
                    Target Document Clause
                  </span>
                  <span className="text-amberAccent-400 font-bold">{current.clause}</span>
                </div>

                {/* Highlighted Passage */}
                <div className="p-4 rounded-xl bg-amberAccent-500/10 border border-amberAccent-500/40 text-xs text-ink-100 leading-relaxed font-sans space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-amberAccent-400 uppercase">
                    <Sparkles className="w-3 h-3" />
                    Synchronized Passage Coordinate
                  </div>
                  <p className="italic text-ink-200">{current.excerpt}</p>
                </div>
              </div>

              {/* Right: Streaming Output & Citations (6 cols) */}
              <div className="lg:col-span-6 p-5 sm:p-6 space-y-4 bg-ink-900">
                <div className="bg-ink-800/90 p-3 rounded-xl border border-ink-700 text-xs text-ink-200">
                  <span className="text-[10px] font-mono text-amberAccent-400 font-bold block mb-1">
                    VERIFIED QUERY:
                  </span>
                  &ldquo;{current.query}&rdquo;
                </div>

                <div className="p-4 rounded-xl bg-ink-850/80 border border-ink-700 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-white font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-iris-400" />
                      <span>RAG Streamed Answer</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      98% Confidence Match
                    </span>
                  </div>

                  <p className="text-xs text-ink-200 leading-relaxed font-sans">
                    {current.answer}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-iris-500/15 text-iris-300 border border-iris-500/30">
                      <BookOpen className="w-3 h-3 text-iris-400" />
                      <span>{current.citation}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup Telemetry Footer */}
            <div className="px-5 py-2.5 bg-ink-950 border-t border-ink-700/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-ink-400">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1 text-ink-300">
                  <Cpu className="w-3.5 h-3.5 text-iris-400" />
                  Gemini 1.5 Flash
                </span>
                <span className="flex items-center gap-1 text-amberAccent-400">
                  <Clock className="w-3.5 h-3.5" />
                  {current.latency} TTFT
                </span>
                <span className="flex items-center gap-1 text-mint-400">
                  <Coins className="w-3.5 h-3.5" />
                  {current.cost}
                </span>
              </div>

              <Link
                href="/dashboard"
                className="text-xs font-bold text-amberAccent-400 hover:text-white flex items-center gap-1"
              >
                <span>Open Full Studio Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
