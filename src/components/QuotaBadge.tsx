"use client";

import React, { useState } from "react";
import { RateLimitStatus } from "@/types";
import { formatSecondsRemaining } from "@/lib/utils";
import { Database, RotateCcw, ShieldCheck, Zap } from "lucide-react";

interface QuotaBadgeProps {
  status: RateLimitStatus | null;
  onResetQuota: () => void;
  isLoading?: boolean;
}

export const QuotaBadge: React.FC<QuotaBadgeProps> = ({
  status,
  onResetQuota,
  isLoading = false,
}) => {
  const [showPopover, setShowPopover] = useState(false);

  const remaining = status ? status.remaining : 10;
  const limit = status ? status.limit : 10;
  const percentage = Math.round((remaining / limit) * 100);

  // Badge color logic
  let colorClass = "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
  let dotColor = "bg-emerald-400";
  if (remaining <= 2) {
    colorClass = "text-rose-400 border-rose-500/30 bg-rose-500/10";
    dotColor = "bg-rose-400 animate-pulse";
  } else if (remaining <= 5) {
    colorClass = "text-amber-400 border-amber-500/30 bg-amber-500/10";
    dotColor = "bg-amber-400";
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowPopover(!showPopover)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all hover:brightness-110 ${colorClass}`}
        title="View rate limit and token budget details"
      >
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        <span className="font-semibold">{remaining}/{limit}</span>
        <span className="hidden sm:inline text-[11px] opacity-80">Free Queries Today</span>
        <Database className="w-3.5 h-3.5 opacity-60 ml-0.5" />
      </button>

      {/* Popover */}
      {showPopover && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowPopover(false)}
          />
          <div className="absolute right-0 mt-2 z-50 w-80 p-4 bg-surface-card border border-surface-border rounded-xl shadow-2xl animate-fade-in text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Rate Limiting & Cost Control</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-hover text-slate-400 border border-surface-border">
                {status?.provider || "Upstash Redis"}
              </span>
            </div>

            <div className="py-3 space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Daily Free Quota:</span>
                <span className="font-mono font-semibold text-white">
                  {remaining} of {limit} queries left
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-surface-border rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    remaining <= 2
                      ? "bg-rose-500"
                      : remaining <= 5
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                <span>Window Reset:</span>
                <span className="font-mono text-slate-300">
                  {status ? formatSecondsRemaining(status.resetSeconds) : "24h sliding window"}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-surface-hover/60 border border-surface-border text-[11px] text-slate-400 leading-relaxed">
                <div className="flex items-center gap-1.5 text-brand-300 font-medium mb-1">
                  <Zap className="w-3 h-3 text-brand-400" />
                  <span>Production Telemetry</span>
                </div>
                Enforces server token budgeting using Upstash Redis sliding-window algorithm, preventing abuse and API cost spikes.
              </div>
            </div>

            <div className="pt-2 border-t border-surface-border flex items-center justify-between">
              <button
                onClick={() => {
                  onResetQuota();
                  setShowPopover(false);
                }}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-surface-hover hover:bg-surface-border rounded-lg transition-colors border border-surface-border"
              >
                <RotateCcw className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`} />
                <span>Reset Demo Quota (10 Queries)</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
