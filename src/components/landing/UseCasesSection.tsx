"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  FileCheck2,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

interface UseCase {
  id: string;
  icon: any;
  badge: string;
  title: string;
  description: string;
  sampleQuestion: string;
  sampleAnswer: string;
  citation: string;
}

export const UseCasesSection: React.FC = () => {
  const [activeId, setActiveId] = useState("eng");

  const useCases: UseCase[] = [
    {
      id: "eng",
      icon: Code2,
      badge: "Engineering & Architecture",
      title: "Zero-Interruption Architecture Queries for Dev Teams",
      description:
        "Engineers waste 3+ hours every week asking seniors about API limits, database failover, and deployment topologies. Ingest architecture runbooks once and get authoritative answers with code citations.",
      sampleQuestion: "What is the token expiration SLA and DB failover trigger time?",
      sampleAnswer:
        "Ephemeral SSH and cluster access tokens expire strictly after 60 minutes. Automated health checks trigger DNS failover to alternate availability zones within 120 seconds.",
      citation: "Infrastructure Runbook, p. 14 (¶ 3)",
    },
    {
      id: "product",
      icon: FileCheck2,
      badge: "Product & Go-To-Market",
      title: "Eliminate GTM Guesswork from 60-Page PRDs",
      description:
        "Sales, marketing, and customer success can query product requirements documents (PRDs) directly to confirm feature scopes, rollout phases, and pricing tier entitlements without scheduling meetings.",
      sampleQuestion: "Is SOC 2 Type II audit compliance included in the Growth tier?",
      sampleAnswer:
        "No. SOC 2 Type II reports and custom SAML SSO are restricted strictly to Enterprise Plan subscribers, requiring a minimum annual commitment of $48,000.",
      citation: "Product Requirements Document (PRD v2.4), p. 8",
    },
    {
      id: "legal",
      icon: Briefcase,
      badge: "Legal & Vendor Operations",
      title: "Instant SLA Penalty & Contract Clause Verification",
      description:
        "Review 100-page Master Service Agreements (MSAs) and vendor contracts in seconds. Verify liability caps, uptime commitments, and termination notice windows without hourly legal review costs.",
      sampleQuestion: "What is our financial credit if uptime drops below 99.0%?",
      sampleAnswer:
        "Uptime falling below 99.00% automatically grants an invoice credit of 50% of the monthly recurring fees. Claims must be submitted within 30 days of incident occurrence.",
      citation: "Master SLA Agreement 2026, p. 2 (¶ 1)",
    },
    {
      id: "finance",
      icon: TrendingUp,
      badge: "Finance & Investor Relations",
      title: "Audit-Ready Financials for Board Decks & Due Diligence",
      description:
        "Founders and finance leads can query audit reports, revenue models, and investor update decks to verify ARR trajectories, CAC/LTV ratios, and gross margins before pitch meetings.",
      sampleQuestion: "What was our ending ARR and blended CAC payback period?",
      sampleAnswer:
        "Ending ARR reached $28.6M (+130.6% YoY) with an LTV:CAC ratio of 8.9x and a compressed payback period of 5.8 months.",
      citation: "FY2026 Board Update, p. 2 (¶ 3)",
    },
  ];

  const currentCase = useCases.find((c) => c.id === activeId) || useCases[0];

  return (
    <section id="use-cases" className="py-20 sm:py-24 bg-ink-900 border-b border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-850 border border-ink-700 text-cyanAccent-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>BUILT FOR MODERN WORKFLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Fast-Moving Tech Teams
          </h2>
          <p className="text-base text-ink-300 leading-relaxed font-sans">
            Replace repeated Slack interruptions and lost Notion pages with an intelligent knowledge base that provides cited answers with zero hallucinations.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {useCases.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-ink-850 border-violetAccent-500/80 shadow-glowViolet"
                    : "bg-ink-950/70 border-ink-700/80 hover:bg-ink-850 hover:border-ink-600"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? "bg-gradient-to-tr from-violetAccent-500 to-cyanAccent-400 text-white font-bold shadow-sm"
                      : "bg-ink-800 text-ink-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-ink-400 font-semibold">{item.badge}</div>
                  <div className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                    {item.title.split(" ")[0]} {item.title.split(" ")[1]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-ink-950 border border-ink-700/80 shadow-studio grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-ink-850 text-cyanAccent-400 border border-ink-700">
              {currentCase.badge}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {currentCase.title}
            </h3>
            <p className="text-sm text-ink-300 leading-relaxed font-sans">
              {currentCase.description}
            </p>

            <div className="pt-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyanAccent-400 hover:text-cyanAccent-300 transition-colors"
              >
                <span>Query this document in the live workspace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Simulated Prompt & Answer Box */}
          <div className="lg:col-span-6 bg-ink-900 rounded-2xl border border-ink-700 p-5 space-y-3.5">
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-ink-700 pb-2">
              <span className="text-ink-400 font-semibold">VERIFIED CITATION DEMO</span>
              <span className="text-emerald-400 font-bold">100% CITED</span>
            </div>

            {/* Prompt */}
            <div className="bg-ink-850 p-3.5 rounded-xl border border-ink-700 text-xs text-ink-200">
              <span className="text-[10px] font-mono text-cyanAccent-400 font-bold block mb-1">TEAM QUERY:</span>
              &ldquo;{currentCase.sampleQuestion}&rdquo;
            </div>

            {/* Answer */}
            <div className="bg-ink-800/90 border border-ink-700 p-4 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-violetAccent-400" />
                <span>Streamed Answer</span>
              </div>
              <p className="text-xs text-ink-200 leading-relaxed font-sans">
                {currentCase.sampleAnswer}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <BookOpen className="w-3.5 h-3.5 text-cyanAccent-400" />
                <span className="text-[11px] font-mono font-semibold text-cyanAccent-300">
                  {currentCase.citation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
