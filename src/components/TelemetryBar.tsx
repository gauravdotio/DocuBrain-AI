"use client";

import React from "react";
import { QueryTelemetry } from "@/types";
import { Activity, Clock, Coins, Cpu, Hash } from "lucide-react";

interface TelemetryBarProps {
  telemetry: QueryTelemetry | null;
  isStreaming?: boolean;
}

export const TelemetryBar: React.FC<TelemetryBarProps> = ({
  telemetry,
  isStreaming = false,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-surface-card border-t border-surface-border text-xs font-mono text-slate-400">
      <div className="flex flex-wrap items-center gap-4">
        {/* Engine status */}
        <div className="flex items-center gap-1.5 text-slate-300">
          <Cpu className="w-3.5 h-3.5 text-brand-400" />
          <span className="text-[11px] font-sans font-medium text-slate-400">Model:</span>
          <span className="text-white font-mono text-[11px]">
            {telemetry?.engine || "Gemini 1.5 Flash / Demo"}
          </span>
        </div>

        {/* Tokens */}
        <div className="flex items-center gap-1.5">
          <Hash className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="text-[11px] font-sans text-slate-400">Tokens:</span>
          <span className="text-white font-mono">
            {telemetry ? `${telemetry.totalTokens} (in: ${telemetry.promptTokens} / out: ${telemetry.completionTokens})` : "—"}
          </span>
        </div>

        {/* Latency */}
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-accent-amber" />
          <span className="text-[11px] font-sans text-slate-400">Latency:</span>
          <span className="text-white font-mono">
            {telemetry ? `${telemetry.latencyMs}ms` : "—"}
          </span>
        </div>

        {/* Cost */}
        <div className="flex items-center gap-1.5">
          <Coins className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-sans text-slate-400">Est. Cost:</span>
          <span className="text-emerald-300 font-mono">
            {telemetry ? `$${telemetry.costDollars.toFixed(6)}` : "$0.000000"}
          </span>
        </div>
      </div>

      {/* Streaming pulse status */}
      <div className="flex items-center gap-2">
        {isStreaming ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-brand-500/20 text-brand-300 border border-brand-500/30 font-sans font-medium animate-pulse">
            <Activity className="w-3 h-3 text-brand-400 animate-spin" />
            Streaming Tokens...
          </span>
        ) : telemetry ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Synchronized
          </span>
        ) : (
          <span className="text-[11px] text-slate-500 font-sans">
            Awaiting prompt
          </span>
        )}
      </div>
    </div>
  );
};
