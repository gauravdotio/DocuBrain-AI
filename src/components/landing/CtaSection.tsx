"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-tr from-surface-card via-brand-900/30 to-surface-card border border-brand-500/40 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-brand-500/20 text-brand-300 border border-brand-400/30">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              <span>READY TO TEST LIVE IN YOUR BROWSER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Experience Audit-Ready RAG & Token Streaming in Seconds
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Evaluate real-world document intelligence with preloaded enterprise knowledge bases. No credit card, no sign-up, and zero complex environment configuration required.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/app"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-accent-violet to-brand-500 hover:brightness-110 shadow-xl shadow-brand-500/30 border border-brand-400/50 transition-all hover:scale-[1.02]"
              >
                <span>Launch Live Interactive Console</span>
                <ArrowRight className="w-4 h-4 text-accent-cyan" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Upstash Redis Protected
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-accent-amber" />
                Sub-200ms Token Streaming
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
