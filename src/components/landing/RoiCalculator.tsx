"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, ArrowRight, Database } from "lucide-react";

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
    <section id="calculator" className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-brand-600" />
            <span>PREDICTABLE TOKEN COST CONTROL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stop Runaway AI Bills With Token Budgeting
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Unrestricted LLM APIs can bankrupt startups with runaway token loops. DocuBrain enforces Upstash Redis sliding-window budgeting to guarantee strict cost controls.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Team Size:</span>
                <span className="font-mono text-brand-600 text-sm font-bold bg-brand-50 px-3 py-1 rounded-lg border border-brand-200/80 shadow-xs">
                  {teamSize} members
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={100}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Daily Queries Per Member:</span>
                <span className="font-mono text-brand-600 text-sm font-bold bg-brand-50 px-3 py-1 rounded-lg border border-brand-200/80 shadow-xs">
                  {queriesPerDay} queries/day
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={25}
                value={queriesPerDay}
                onChange={(e) => setQueriesPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Upstash Redis 10 queries/day sliding window limit</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-brand-600" />
                <span>In-memory token caching prevents duplicate embedding charges</span>
              </div>
            </div>
          </div>

          {/* Metric Outputs */}
          <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-5 text-center shadow-mockup">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Estimated Annual Value & Savings
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                ${Math.round(annualSavings).toLocaleString()}
                <span className="text-xs font-sans text-slate-400 font-normal">/yr</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-left">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                <span className="text-[10px] font-mono text-slate-400 font-semibold block">Monthly Queries</span>
                <span className="text-sm font-bold font-mono text-white mt-0.5 block">
                  {monthlyQueries.toLocaleString()}
                </span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                <span className="text-[10px] font-mono text-slate-400 font-semibold block">Actual API Cost</span>
                <span className="text-sm font-bold font-mono text-brand-400 mt-0.5 block">
                  ${actualApiCost.toFixed(2)}/mo
                </span>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white text-xs font-bold transition-all shadow-button"
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

