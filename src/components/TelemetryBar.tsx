"use client";

import React from "react";
import { QueryTelemetry } from "@/types";
import { Activity, Clock, Coins, Cpu, Hash, ShieldCheck } from "lucide-react";

interface TelemetryBarProps {
  telemetry: QueryTelemetry | null;
  isStreaming?: boolean;
}

export const TelemetryBar: React.FC<TelemetryBarProps> = ({
  telemetry,
  isStreaming = false,
}) => {
  return (
    <div className="h-9 px-4 bg-[#0A0E17] border-t border-[#1E293B] flex items-center justify-between text-[11px] font-mono text-slate-400 select-none">
      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
        {/* Model */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Cpu className="w-3.5 h-3.5 text-brand-400" />
          <span className="text-slate-500 font-sans">Model:</span>
          <span className="text-slate-200">
            {telemetry?.engine ? (telemetry.engine.includes("Gemini") ? "gemini-1.5-flash" : "simulated-rag") : "gemini-1.5-flash"}
          </span>
        </div>

        {/* Tokens */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Hash className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-500 font-sans">Tokens:</span>
          <span className="text-slate-200">
            {telemetry ? `${telemetry.totalTokens} (in: ${telemetry.promptTokens} / out: ${telemetry.completionTokens})` : "—"}
          </span>
        </div>

        {/* Latency */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-500 font-sans">Latency:</span>
          <span className="text-slate-200">
            {telemetry ? `${telemetry.latencyMs}ms` : "—"}
          </span>
        </div>

        {/* Cost */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Coins className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-500 font-sans">Cost:</span>
          <span className="text-emerald-300">
            {telemetry ? `$${telemetry.costDollars.toFixed(6)}` : "$0.000000"}
          </span>
        </div>
      </div>

      {/* Real-time streaming pulse */}
      <div className="flex items-center gap-2 shrink-0 ml-2">
        {isStreaming ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] bg-brand-500/20 text-brand-300 border border-brand-500/30 animate-pulse">
            <Activity className="w-3 h-3 text-brand-400 animate-spin" />
            Streaming SSE...
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] text-slate-500">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Redis Protected</span>
          </span>
        )}
      </div>
    </div>
  );
};
