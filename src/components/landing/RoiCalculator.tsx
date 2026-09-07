"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, DollarSign, ArrowRight, Zap, Database } from "lucide-react";

export const RoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState(15);
  const [queriesPerDay, setQueriesPerDay] = useState(8);

  // Calculations
  const dailyQueries = teamSize * queriesPerDay;
  const monthlyQueries = dailyQueries * 22; // 22 working days
  const avgTokensPerQuery = 420; // 350 context + 70 answer
  const monthlyTokens = monthlyQueries * avgTokensPerQuery;

  // Gemini 1.5 Flash cost: ~$0.000075 / 1k tokens
  const actualApiCost = (monthlyTokens / 1_000_000) * 0.15;

  // Manual legal / engineer review time saved: 15 mins per query at $65/hr
  const hoursSaved = (monthlyQueries * 15) / 60;
  const monthlyDollarSavings = hoursSaved * 65;
  const annualSavings = monthlyDollarSavings * 12;

  return (
    <section id="calculator" className="py-24 border-t border-surface-border relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-violet/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>SERVER COST CONTROL & TOKEN BUDGETING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable Token Costs. Zero API Spikes.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Unrestricted LLM APIs can bankrupt startups with runaway token loops. DocuBrain enforces Upstash Redis sliding-window budgeting to guarantee strict server cost controls.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-surface-card border border-surface-border p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders (6 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">Team Size:</span>
                <span className="font-mono text-white text-sm font-bold bg-surface-hover px-2.5 py-1 rounded-lg border border-surface-border">
                  {teamSize} members
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={100}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-surface-hover rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">Daily Queries Per Member:</span>
                <span className="font-mono text-white text-sm font-bold bg-surface-hover px-2.5 py-1 rounded-lg border border-surface-border">
                  {queriesPerDay} queries/day
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={25}
                value={queriesPerDay}
                onChange={(e) => setQueriesPerDay(Number(e.target.value))}
                className="w-full h-2 bg-surface-hover rounded-lg appearance-none cursor-pointer accent-accent-cyan"
              />
            </div>

            {/* Feature Check */}
            <div className="pt-2 border-t border-surface-border space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Upstash Redis 10 queries/day sliding window limit</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-accent-cyan" />
                <span>In-memory token caching prevents repeated embedding costs</span>
              </div>
            </div>
          </div>

          {/* Metric Outputs (5 cols) */}
          <div className="lg:col-span-5 bg-background rounded-2xl border border-surface-border p-6 space-y-5 text-center">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Estimated Annual Time & Cost Saved
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                ${Math.round(annualSavings).toLocaleString()}
                <span className="text-xs font-sans text-slate-400 font-normal">/yr</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-surface-border text-left">
              <div className="bg-surface-card p-3 rounded-xl border border-surface-border">
                <span className="text-[10px] font-mono text-slate-400 block">Monthly Queries</span>
                <span className="text-sm font-bold font-mono text-white mt-0.5 block">
                  {monthlyQueries.toLocaleString()}
                </span>
              </div>
              <div className="bg-surface-card p-3 rounded-xl border border-surface-border">
                <span className="text-[10px] font-mono text-slate-400 block">API Cost Only</span>
                <span className="text-sm font-bold font-mono text-brand-300 mt-0.5 block">
                  ${actualApiCost.toFixed(2)}/mo
                </span>
              </div>
            </div>

            <Link
              href="/app"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <span>Test Free in Live Console</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
