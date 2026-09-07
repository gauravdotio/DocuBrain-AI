"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Star,
  Play,
  CheckCircle2,
  ShieldCheck,
  Lock,
  FileText,
  BookOpen,
  Cpu,
  Clock,
  Coins,
  Shield,
} from "lucide-react";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDemo }) => {
  const [activePreset, setActivePreset] = useState<"sla" | "fintech">("sla");

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white subtle-grid border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/70 text-brand-700 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span>Built for High-Growth Tech, Legal & Finance Teams</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Enterprise Knowledge, <br className="hidden sm:inline" />
              <span className="text-brand-500">Without the Hallucinations</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              DocuBrain AI replaces manual document reviews and repetitive Slack pings with an audit-ready knowledge engine — streaming verified answers with highlighted clause citations and Upstash token budgeting.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-0.5 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span>5.0</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Trusted by 250+ engineering & compliance teams</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Launch Live App</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-brand-700 active:bg-slate-100 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all duration-150 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-brand-500 fill-brand-500" />
                <span>Request a Demo</span>
              </button>
            </div>

            {/* Proof Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero login friction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Verifiable clause citations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Upstash Redis rate-limited</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tilted 3D Enterprise Mockup */}
          <div className="lg:col-span-6 relative animate-slide-up" style={{ animationDelay: "150ms" }}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/15 via-tealAccent-500/10 to-transparent rounded-3xl filter blur-2xl -z-10 opacity-70" />

            <div className="transform lg:perspective-1000 lg:rotate-y-[-2deg] transition-transform duration-500 hover:rotate-0">
              <div className="w-full bg-white rounded-2xl shadow-mockup border border-slate-200 overflow-hidden font-sans text-left">
                {/* Mockup Browser Chrome Bar */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-xs text-slate-300 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-slate-600 text-xs hidden sm:inline ml-2">|</span>
                    <span className="font-mono text-[11px] text-slate-300 flex items-center gap-1.5 ml-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      https://acme.docubrain.portal/knowledge/contract-408
                    </span>
                  </div>

                  {/* Preset switcher */}
                  <div className="flex items-center space-x-1 bg-slate-800/90 rounded-md p-0.5 border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setActivePreset("sla")}
                      className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                        activePreset === "sla"
                          ? "bg-brand-500 text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      SLA Agreement
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePreset("fintech")}
                      className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                        activePreset === "fintech"
                          ? "bg-brand-500 text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      FY2026 10-K
                    </button>
                  </div>
                </div>

                {/* Mockup Top Header */}
                <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      {activePreset === "sla" ? "CM" : "FP"}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {activePreset === "sla"
                            ? "CloudMesh Enterprise SLA 2026"
                            : "FinPulse FY2026 Financial Operations"}
                        </h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-brand-50 text-brand-700 border border-brand-200/60 font-mono">
                          Page 2 of 3
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        {activePreset === "sla"
                          ? "Clause 2.1: Uptime Commitment & Financial Credit Schedule"
                          : "Clause 1.2: Annual Recurring Revenue & Net Revenue Retention"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      10/10 Redis Quota
                    </span>
                  </div>
                </div>

                {/* Split Content Inside Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white">
                  {/* Left: Highlighted Clause in Document */}
                  <div className="p-4 space-y-3 bg-slate-50/40">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <FileText className="w-3.5 h-3.5 text-brand-600" />
                        Target Document Clause
                      </span>
                      <span className="text-brand-600 font-bold">¶ Clause 2.1</span>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-50/80 border border-brand-200 text-xs text-slate-800 leading-relaxed space-y-1 relative">
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-brand-700 uppercase font-mono">
                        <Sparkles className="w-3 h-3 text-brand-600" />
                        Synchronized Highlight
                      </div>
                      <p className="italic">
                        {activePreset === "sla"
                          ? "“If CloudMesh fails to meet 99.00% uptime in any billing month, the customer receives an automatic 50% Service Credit. RTO requires restoration in <15 minutes.”"
                          : "“FinPulse achieved $28.6M in ending ARR (+130.6% YoY) with Net Revenue Retention (NRR) expanding to 134.2% and gross margin of 81.5%.”"}
                      </p>
                    </div>
                  </div>

                  {/* Right: AI Stream & Citation Pill */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                        Streaming Answer
                      </span>
                      <span className="text-emerald-600 font-bold">98% Match</span>
                    </div>

                    <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                      <p>
                        {activePreset === "sla"
                          ? "Dropping below 99.00% uptime triggers a **50% Service Credit** applied to the subsequent invoice with a strict 15-minute RTO."
                          : "Ending ARR reached **$28.6M (+130.6% YoY)** with **134.2% NRR** and a rapid **5.8-month payback period**."}
                      </p>

                      <div className="pt-2 flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-50 text-brand-700 border border-brand-200 font-mono shadow-xs">
                          <BookOpen className="w-3 h-3 text-brand-500" />
                          <span>Doc 1, p.2 (Clause 2.1)</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mockup Telemetry Footer */}
                <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-slate-200">
                      <Cpu className="w-3 h-3 text-brand-400" />
                      Gemini 1.5 Flash
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Clock className="w-3 h-3" />
                      158ms TTFT
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Coins className="w-3 h-3" />
                      $0.000042
                    </span>
                  </div>

                  <Link
                    href="/dashboard"
                    className="text-xs font-bold text-brand-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Launch Live</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
