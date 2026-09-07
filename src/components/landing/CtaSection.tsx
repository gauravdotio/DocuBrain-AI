"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface CtaSectionProps {
  onRequestDemo: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onRequestDemo }) => {
  return (
    <section className="py-20 bg-ink-950 relative overflow-hidden border-b border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-ink-900 via-ink-850 to-ink-900 p-8 sm:p-14 text-center overflow-hidden shadow-studio border border-ink-700/80 text-white">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-ink-800 text-cyanAccent-400 border border-ink-700">
              <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
              <span>READY TO ELIMINATE KNOWLEDGE SILOS?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Start Querying Your Documents in Under 60 Seconds
            </h2>

            <p className="text-sm sm:text-base text-ink-300 leading-relaxed font-sans">
              Join leading tech startups, legal teams, and compliance officers who trust DocuBrain AI for verifiable answers with zero hallucinations.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violetAccent-600 via-violetAccent-500 to-cyanAccent-500 hover:brightness-110 shadow-glowDual transition-all hover:scale-[1.02]"
              >
                <span>Launch Studio Console</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <button
                type="button"
                onClick={onRequestDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-ink-200 hover:text-white bg-ink-800 hover:bg-ink-750 border border-ink-700 transition-colors"
              >
                <span>Request Enterprise Demo</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-ink-400 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                SOC 2 Type II Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyanAccent-400" />
                Sub-180ms Streaming Latency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
