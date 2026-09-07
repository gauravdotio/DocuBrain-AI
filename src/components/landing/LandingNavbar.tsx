"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, ArrowRight, Menu, X, ChevronDown, Sparkles } from "lucide-react";

interface LandingNavbarProps {
  onRequestDemo: () => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({ onRequestDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200 py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-tealAccent-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                DocuBrain<span className="text-brand-500">.ai</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                Enterprise Knowledge & RAG
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            <a href="#features" className="px-3.5 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition">
              Features
            </a>
            <a href="#use-cases" className="px-3.5 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition">
              Use Cases
            </a>
            <a href="#calculator" className="px-3.5 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition">
              Token Budgeting
            </a>
            <a href="#pricing" className="px-3.5 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition">
              Pricing
            </a>
            <a href="#security" className="px-3.5 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition">
              Security
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onRequestDemo}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition"
            >
              Request Demo
            </button>
            <Link
              href="/auth/login"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 rounded-xl shadow-sm hover:shadow transition-all duration-150 transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>Launch App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-brand-500 rounded-lg"
            >
              Launch
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
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2 animate-fade-in text-sm font-medium text-slate-700">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Features
          </a>
          <a href="#use-cases" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Use Cases
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Token Budgeting
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2">
            Pricing
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link href="/auth/login" className="py-2 text-center text-slate-700 font-semibold bg-slate-50 rounded-lg">
              Sign In
            </Link>
            <Link href="/dashboard" className="py-2.5 text-center text-white font-semibold bg-brand-500 rounded-lg">
              Launch App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
