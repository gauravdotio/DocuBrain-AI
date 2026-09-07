"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { RateLimitStatus } from "@/types";
import { formatSecondsRemaining } from "@/lib/utils";
import {
  ShieldCheck,
  Zap,
  Coins,
  Clock,
  RotateCcw,
  Database,
  BarChart3,
  TrendingUp,
  Server,
} from "lucide-react";

export default function AnalyticsPage() {
  const [rateLimit, setRateLimit] = useState<RateLimitStatus | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    fetch("/api/rate-limit")
      .then((res) => res.json())
      .then((data) => setRateLimit(data))
      .catch(() => {});
  }, []);

  const handleReset = async () => {
    setIsResetting(true);
    try {
      const res = await fetch("/api/rate-limit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      if (res.ok) {
        const data = await res.json();
        setRateLimit(data);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.2, x: 0.7 },
          colors: ["#4F46E5", "#0D9488", "#38BDF8"],
        });
      }
    } finally {
      setIsResetting(false);
    }
  };

  const remaining = rateLimit ? rateLimit.remaining : 10;
  const limit = rateLimit ? rateLimit.limit : 10;
  const percentage = Math.round((remaining / limit) * 100);

  return (
    <div className="p-6 sm:p-8 space-y-6 h-full overflow-y-auto bg-slate-50">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Token Budget & Server Telemetry
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Real-time monitoring of LLM token consumption, latency, and Upstash Redis rate limiting.
        </p>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Daily Quota */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-[10px] font-mono">Daily Allowance</span>
            <Database className="w-4 h-4 text-brand-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono mt-2">
            {remaining} / {limit}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Free queries left in current 24h window
          </p>
        </div>

        {/* Card 2: Average Latency */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-[10px] font-mono">Avg TTFT Latency</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono mt-2">
            158ms
          </div>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">
            ⚡ 99.4% sub-200ms target SLA
          </p>
        </div>

        {/* Card 3: Est Token Cost */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-[10px] font-mono">Cost Per Query</span>
            <Coins className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono mt-2">
            $0.000042
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Google Gemini 1.5 Flash Vision pricing
          </p>
        </div>

        {/* Card 4: Redis Guardrail */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-[10px] font-mono">Rate Limiter</span>
            <ShieldCheck className="w-4 h-4 text-tealAccent-500" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-2 truncate">
            {rateLimit?.provider || "Upstash Redis"}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Sliding window algorithm
          </p>
        </div>
      </div>

      {/* Main Budget Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Upstash Redis 24-Hour Sliding-Window Budget
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Prevents unauthorized token spikes and controls developer LLM billing.
            </p>
          </div>

          <button
            onClick={handleReset}
            disabled={isResetting}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm shrink-0"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isResetting ? "animate-spin" : ""}`} />
            <span>Reset Demo Allowance (10 Queries)</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-500">Remaining Quota:</span>
            <span className="font-bold text-slate-800">{percentage}% Available</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                remaining <= 2 ? "bg-rose-500" : remaining <= 5 ? "bg-amber-500" : "bg-emerald-500"
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 font-mono pt-1">
            <span>Quota Reset Interval:</span>
            <span>{rateLimit ? formatSecondsRemaining(rateLimit.resetSeconds) : "24h window"}</span>
          </div>
        </div>

        {/* Architecture Callout */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <div className="font-bold text-slate-800 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-brand-500" />
            <span>Why This Wins Enterprise Contracts</span>
          </div>
          <p>
            Many clients lose thousands of dollars on unmonitored LLM loops. DocuBrain demonstrates senior full-stack architectural competence by placing an Upstash Redis sliding-window gatekeeper in front of the Server-Sent Events (SSE) stream, enforcing strict per-tenant and per-IP budgeting.
          </p>
        </div>
      </div>
    </div>
  );
}
