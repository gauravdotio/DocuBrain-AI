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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200 py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Distinct Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                  DocuBrain
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-50 text-brand-600 border border-brand-200">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-normal mt-0.5">
                Enterprise Knowledge & RAG
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            <a href="#features" className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition">
              Product
            </a>
            <a href="#use-cases" className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition">
              Use Cases
            </a>
            <a href="#calculator" className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition">
              Token Guardrail
            </a>
            <a href="#security" className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition">
              Security
            </a>
            <a href="#pricing" className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition">
              Pricing
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onRequestDemo}
              className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              Request Demo
            </button>
            <Link
              href="/auth/login"
              className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 active:scale-[0.98] rounded-xl shadow-button hover:shadow-buttonHover transition-all duration-150 flex items-center gap-1.5"
            >
              <span>Launch App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 text-xs font-bold text-white bg-brand-600 rounded-lg"
            >
              Studio
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2 animate-fade-in text-sm font-medium text-slate-700 shadow-lg">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Product
          </a>
          <a href="#use-cases" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Use Cases
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Token Guardrail
          </a>
          <a href="#security" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Security
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Pricing
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link href="/auth/login" className="py-2 text-center text-slate-700 font-semibold bg-slate-100 rounded-lg">
              Sign In
            </Link>
            <Link href="/dashboard" className="py-2.5 text-center text-white font-bold bg-brand-600 rounded-lg shadow-sm">
              Launch App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
