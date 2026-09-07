"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface CtaSectionProps {
  onRequestDemo: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onRequestDemo }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-brand-600 p-8 sm:p-14 text-center overflow-hidden shadow-mockup text-white">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>READY TO ELIMINATE KNOWLEDGE SILOS?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Start Querying Your Documents in Under 60 Seconds
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
              Join leading tech startups, legal teams, and compliance officers who trust DocuBrain AI for verifiable answers with zero hallucinations.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-brand-600 bg-white hover:bg-slate-50 shadow-button hover:shadow-buttonHover transition-all active:scale-[0.98]"
              >
                <span>Launch Studio Console</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </Link>

              <button
                type="button"
                onClick={onRequestDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-brand-700/60 hover:bg-brand-700 border border-white/20 transition-colors"
              >
                <span>Request Enterprise Demo</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                SOC 2 Type II Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-blue-200" />
                Sub-180ms Streaming Latency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

