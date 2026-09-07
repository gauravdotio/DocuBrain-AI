"use client";

import React from "react";
import Link from "next/link";
import { Brain } from "lucide-react";

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-ink-950 border-t border-ink-800 py-12 text-ink-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-ink-800">
          {/* Col 1 */}
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violetAccent-600 via-violetAccent-500 to-cyanAccent-400 flex items-center justify-center text-white shadow-glowViolet border border-white/20 group-hover:scale-105 transition-transform">
                <Brain className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                DocuBrain<span className="text-cyanAccent-400 font-mono text-xs ml-1 px-1.5 py-0.5 rounded bg-cyanAccent-500/15 border border-cyanAccent-500/30">AI</span>
              </span>
            </Link>
            <p className="text-ink-400 max-w-sm text-xs leading-relaxed font-sans">
              Enterprise document intelligence & neural RAG engine. Real-time token streaming, verifiable clause citations, and Upstash Redis rate limiting.
            </p>
            <div className="text-[11px] font-mono text-ink-500 pt-1">
              Multi-Tenant Architecture • Next.js 14 • Google Gemini 1.5 Flash • Upstash Redis
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Product Architecture
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#features" className="hover:text-cyanAccent-400 transition-colors">
                  Features & RAG Pipeline
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-cyanAccent-400 transition-colors">
                  Team Use Cases
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyanAccent-400 transition-colors">
                  Token Budget Calculator
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-cyanAccent-400 transition-colors">
                  Enterprise Security Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Neural Studio
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/dashboard" className="text-cyanAccent-400 hover:text-cyanAccent-300 font-bold transition-colors">
                  Launch Studio Console →
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-white transition-colors">
                  Sign In / Demo Profiles
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="hover:text-white transition-colors">
                  Create Organization
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-500 font-mono">
          <div>
            © {new Date().getFullYear()} DocuBrain AI. Built for high-growth tech & enterprise teams.
          </div>
          <div className="flex items-center gap-4">
            <span>SOC 2 Type II Certified</span>
            <span>•</span>
            <span>GDPR Article 33 Compliant</span>
            <span>•</span>
            <span>AES-256 Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
