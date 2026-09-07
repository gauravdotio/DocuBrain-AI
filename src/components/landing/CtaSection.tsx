"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface CtaSectionProps {
  onRequestDemo: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onRequestDemo }) => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 p-8 sm:p-14 text-center overflow-hidden shadow-2xl text-white">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/10 text-brand-200 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-tealAccent-400" />
              <span>READY TO ELIMINATE KNOWLEDGE SILOS?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Start Querying Your Documents in Under 60 Seconds
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Join leading tech startups, legal teams, and compliance officers who trust DocuBrain AI for verifiable answers with zero hallucinations.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Launch Live App</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </Link>

              <button
                type="button"
                onClick={onRequestDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <span>Request Enterprise Demo</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                SOC 2 Type II Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Sub-180ms Streaming Latency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
