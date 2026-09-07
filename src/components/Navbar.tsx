"use client";

import React from "react";
import Link from "next/link";
import { RateLimitStatus } from "@/types";
import { QuotaBadge } from "./QuotaBadge";
import {
  Brain,
  Sparkles,
  Key,
  ToggleLeft,
  ToggleRight,
  ArrowLeft,
} from "lucide-react";

interface NavbarProps {
  rateLimit: RateLimitStatus | null;
  onResetQuota: () => void;
  onOpenSettings: () => void;
  demoMode: boolean;
  onToggleDemoMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  rateLimit,
  onResetQuota,
  onOpenSettings,
  demoMode,
  onToggleDemoMode,
}) => {
  return (
    <header className="h-16 border-b border-surface-border bg-surface-card/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30">
      {/* Brand Logo & Back to Home */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-surface-hover hover:bg-surface-border border border-surface-border transition-colors mr-1"
          title="Return to Marketing Landing Page"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <div className="relative">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-accent-violet to-accent-cyan flex items-center justify-center shadow-md shadow-brand-500/20 border border-brand-400/40">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <Sparkles className="w-3 h-3 text-accent-cyan absolute -top-1 -right-1" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
              DocuBrain <span className="text-accent-cyan">Console</span>
            </h1>
            <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/25">
              Live RAG
            </span>
          </div>
          <p className="hidden md:block text-[11px] text-slate-400 font-sans">
            Word-by-word streaming • Source citation pills • Upstash Redis rate limiting
          </p>
        </div>
      </div>

      {/* Action Controls & Badges */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Demo Mode Switch */}
        <button
          onClick={onToggleDemoMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
            demoMode
              ? "bg-brand-500/10 text-brand-300 border-brand-500/30 hover:bg-brand-500/20"
              : "bg-surface-hover text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/15"
          }`}
          title={demoMode ? "Using zero-latency simulated demo engine" : "Using live Google Gemini API"}
        >
          {demoMode ? (
            <ToggleLeft className="w-4 h-4 text-brand-400" />
          ) : (
            <ToggleRight className="w-4 h-4 text-emerald-400" />
          )}
          <span className="hidden sm:inline">
            {demoMode ? "Instant Demo Mode" : "Live Gemini API"}
          </span>
        </button>

        {/* 10 Queries/Day Quota Meter */}
        <QuotaBadge status={rateLimit} onResetQuota={onResetQuota} />

        {/* API Settings Button */}
        <button
          onClick={onOpenSettings}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-hover hover:bg-surface-border text-slate-300 hover:text-white border border-surface-border text-xs font-medium transition-colors"
          title="Configure Gemini API Key & Upstash Redis"
        >
          <Key className="w-3.5 h-3.5 text-brand-400" />
          <span className="hidden sm:inline">API Keys</span>
        </button>
      </div>
    </header>
  );
};
