"use client";

import React from "react";
import Link from "next/link";
import { Brain, Sparkles } from "lucide-react";

export const LandingFooter: React.FC = () => {
  return (
    <footer className="border-t border-surface-border bg-surface-card/60 backdrop-blur-md py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-surface-border">
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-violet flex items-center justify-center text-white shadow-md">
                <Brain className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                DocuBrain<span className="text-accent-cyan">.ai</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed font-sans">
              Enterprise knowledge engine for high-velocity teams. Semantic RAG retrieval, word-by-word streaming markdown, interactive passage highlighting, and Upstash Redis rate limiting.
            </p>
            <div className="text-[11px] font-mono text-slate-500 pt-1">
              Stack: Next.js 14 • TypeScript • Google Gemini • Upstash Redis • Tailwind CSS
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#use-cases" className="hover:text-white transition-colors">
                  Team Use Cases
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  RAG Architecture
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Token ROI Calculator
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Application */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Live Console
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/app" className="text-brand-300 hover:text-white font-medium transition-colors">
                  Launch Interactive Console →
                </Link>
              </li>
              <li>
                <span className="text-slate-500">CloudMesh SLA Document</span>
              </li>
              <li>
                <span className="text-slate-500">FinPulse FY2026 Report</span>
              </li>
              <li>
                <span className="text-slate-500">NexusGuard SOC 2 Playbook</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 DocuBrain AI. Engineered for modern high-performance engineering & startup teams.
          </div>
          <div className="flex items-center gap-4">
            <span>SOC 2 Type II Architecture</span>
            <span>•</span>
            <span>GDPR Article 33 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
