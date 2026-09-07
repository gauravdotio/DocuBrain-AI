"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, Sparkles, ArrowRight, Menu, X, Terminal, Shield } from "lucide-react";

interface LandingNavbarProps {
  onRequestDemo: () => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({ onRequestDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink-900/85 backdrop-blur-xl border-b border-ink-700/80 transition-all duration-200 py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Distinct Neural Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-iris-600 via-iris-500 to-amberAccent-500 flex items-center justify-center text-white shadow-glowIris group-hover:scale-105 transition-transform border border-white/20">
                <Brain className="w-5 h-5" />
              </div>
              <span className="w-2 h-2 rounded-full bg-amberAccent-400 absolute -top-0.5 -right-0.5 shadow-glowAmber animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  DocuBrain
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amberAccent-500/15 text-amberAccent-400 border border-amberAccent-500/30">
                  RAG
                </span>
              </div>
              <span className="text-[10px] text-ink-400 font-mono tracking-wider -mt-0.5">
                Neural Document Engine
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-xs text-ink-300">
            <a href="#playground" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-ink-800 transition">
              Live Playground
            </a>
            <a href="#comparison" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-ink-800 transition">
              The Matrix
            </a>
            <a href="#features" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-ink-800 transition">
              Architecture
            </a>
            <a href="#calculator" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-ink-800 transition">
              Token Guardrail
            </a>
            <a href="#pricing" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-ink-800 transition">
              Pricing
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onRequestDemo}
              className="px-3.5 py-2 text-xs font-semibold text-ink-300 hover:text-white hover:bg-ink-800 rounded-xl transition"
            >
              Request Walkthrough
            </button>
            <Link
              href="/auth/login"
              className="px-3.5 py-2 text-xs font-semibold text-ink-300 hover:text-white hover:bg-ink-800 rounded-xl transition"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-5 py-2.5 text-xs font-bold text-ink-950 bg-gradient-to-r from-amberAccent-400 to-amberAccent-500 hover:brightness-110 active:scale-[0.98] rounded-xl shadow-glowAmber transition-all duration-150 flex items-center gap-1.5"
            >
              <span>Launch Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 text-xs font-bold text-ink-950 bg-amberAccent-400 rounded-lg"
            >
              Studio
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-300 hover:text-white rounded-lg hover:bg-ink-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-ink-700 bg-ink-900 px-4 py-4 space-y-2 animate-fade-in text-sm font-medium text-ink-200">
          <a href="#playground" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Live Playground
          </a>
          <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            The Matrix
          </a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Architecture
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Token Guardrail
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Pricing
          </a>
          <div className="pt-3 border-t border-ink-800 flex flex-col gap-2">
            <Link href="/auth/login" className="py-2 text-center text-ink-200 font-semibold bg-ink-800 rounded-lg">
              Sign In
            </Link>
            <Link href="/dashboard" className="py-2.5 text-center text-ink-950 font-bold bg-amberAccent-400 rounded-lg">
              Launch Studio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
