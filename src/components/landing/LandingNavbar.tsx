"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, Sparkles, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

export const LandingNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border/80 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-accent-violet to-accent-cyan flex items-center justify-center shadow-lg shadow-brand-500/25 border border-brand-400/40 group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <Sparkles className="w-3 h-3 text-accent-cyan absolute -top-1 -right-1 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">
                DocuBrain<span className="text-accent-cyan">.ai</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/30">
                v2.0
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wide -mt-0.5">
              Enterprise Knowledge Engine
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
          <a href="#use-cases" className="hover:text-white transition-colors">
            Use Cases
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            RAG Pipeline
          </a>
          <a href="#calculator" className="hover:text-white transition-colors">
            Token ROI Calculator
          </a>
          <a href="#architecture" className="hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/app"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-violet hover:from-brand-500 hover:to-accent-violet/90 border border-brand-400/40 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all hover:scale-[1.02]"
          >
            <span>Launch Live Console</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-accent-cyan" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-surface-card px-4 py-4 space-y-3 animate-fade-in text-sm">
          <a
            href="#use-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1"
          >
            Use Cases
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1"
          >
            RAG Pipeline
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1"
          >
            Token ROI Calculator
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1"
          >
            Pricing
          </a>
          <div className="pt-2">
            <Link
              href="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500"
            >
              <span>Launch Live Console</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
