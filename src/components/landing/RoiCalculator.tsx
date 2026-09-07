"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, DollarSign, ArrowRight, Zap, Database } from "lucide-react";

export const RoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState(15);
  const [queriesPerDay, setQueriesPerDay] = useState(8);

  const dailyQueries = teamSize * queriesPerDay;
  const monthlyQueries = dailyQueries * 22;
  const avgTokensPerQuery = 420;
  const monthlyTokens = monthlyQueries * avgTokensPerQuery;
  const actualApiCost = (monthlyTokens / 1_000_000) * 0.15;
  const hoursSaved = (monthlyQueries * 15) / 60;
  const monthlyDollarSavings = hoursSaved * 65;
  const annualSavings = monthlyDollarSavings * 12;

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-ink-950 border-b border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-900 border border-ink-700 text-cyanAccent-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>PREDICTABLE TOKEN COST CONTROL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop Runaway AI Bills With Upstash Budgeting
          </h2>
          <p className="text-base text-ink-300 leading-relaxed font-sans">
            Unrestricted LLM APIs can bankrupt startups with runaway token loops. DocuBrain enforces Upstash Redis sliding-window budgeting to guarantee strict cost controls.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-ink-900 border border-ink-700/80 p-8 sm:p-12 shadow-studio grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-ink-200">Team Size:</span>
                <span className="font-mono text-cyanAccent-400 text-sm font-bold bg-ink-850 px-3 py-1 rounded-lg border border-ink-700 shadow-xs">
                  {teamSize} members
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={100}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-ink-800 rounded-lg appearance-none cursor-pointer accent-cyanAccent-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-ink-200">Daily Queries Per Member:</span>
                <span className="font-mono text-violetAccent-400 text-sm font-bold bg-ink-850 px-3 py-1 rounded-lg border border-ink-700 shadow-xs">
                  {queriesPerDay} queries/day
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={25}
                value={queriesPerDay}
                onChange={(e) => setQueriesPerDay(Number(e.target.value))}
                className="w-full h-2 bg-ink-800 rounded-lg appearance-none cursor-pointer accent-violetAccent-500"
              />
            </div>

            <div className="pt-2 border-t border-ink-800 space-y-2 text-xs text-ink-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Upstash Redis 10 queries/day sliding window limit</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-cyanAccent-400" />
                <span>In-memory token caching prevents duplicate embedding charges</span>
              </div>
            </div>
          </div>

          {/* Metric Outputs */}
          <div className="lg:col-span-5 bg-ink-950 rounded-2xl border border-ink-700 p-6 space-y-5 text-center shadow-lg">
            <div>
              <span className="text-[11px] font-mono text-ink-400 uppercase tracking-wider block font-semibold">
                Estimated Annual Value & Savings
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                ${Math.round(annualSavings).toLocaleString()}
                <span className="text-xs font-sans text-ink-500 font-normal">/yr</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-ink-800 text-left">
              <div className="bg-ink-900 p-3 rounded-xl border border-ink-700/80">
                <span className="text-[10px] font-mono text-ink-400 font-semibold block">Monthly Queries</span>
                <span className="text-sm font-bold font-mono text-white mt-0.5 block">
                  {monthlyQueries.toLocaleString()}
                </span>
              </div>
              <div className="bg-ink-900 p-3 rounded-xl border border-ink-700/80">
                <span className="text-[10px] font-mono text-ink-400 font-semibold block">Actual API Cost</span>
                <span className="text-sm font-bold font-mono text-cyanAccent-400 mt-0.5 block">
                  ${actualApiCost.toFixed(2)}/mo
                </span>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violetAccent-600 to-cyanAccent-500 hover:brightness-110 text-white text-xs font-bold transition-all shadow-glowDual"
            >
              <span>Test Free in Live Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
