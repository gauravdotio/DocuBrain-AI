"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap, FileCheck, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-600/20 via-accent-violet/15 to-accent-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-mono mb-8 animate-fade-in shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
          <span>PRODUCTION-GRADE RAG ENGINE & TOKEN STREAMING</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
          The AI Knowledge Engine That{" "}
          <span className="bg-gradient-to-r from-brand-400 via-accent-violet to-accent-cyan bg-clip-text text-transparent">
            Never Hallucinates.
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
          Stop digging through 80-page engineering specs, legal contracts, and investor decks. DocuBrain AI ingests company documents and provides real-time streaming answers backed by <strong className="text-white">interactive, highlighted source citations</strong> and <strong className="text-white">Upstash Redis token budgeting</strong>.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/app"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-accent-violet to-brand-500 hover:brightness-110 shadow-xl shadow-brand-500/25 border border-brand-400/40 transition-all hover:scale-[1.02]"
          >
            <span>Launch Live Interactive Console</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan" />
          </Link>

          <a
            href="#use-cases"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-medium text-slate-300 hover:text-white bg-surface-card hover:bg-surface-hover border border-surface-border transition-colors"
          >
            <span>Explore Team Use Cases</span>
          </a>
        </div>

        {/* Guarantees & Proof Points */}
        <div className="mt-12 pt-8 border-t border-surface-border/50 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Word-by-word streaming UI</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <FileCheck className="w-4 h-4 text-accent-cyan shrink-0" />
            <span>Clickable passage citations</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <Shield className="w-4 h-4 text-accent-violet shrink-0" />
            <span>Upstash Redis rate limiting</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Zero-latency instant demo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
