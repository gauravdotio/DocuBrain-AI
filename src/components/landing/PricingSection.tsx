"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Zap, ArrowRight, Sparkles, Building2, Terminal } from "lucide-react";

interface PricingSectionProps {
  onRequestDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      id: "developer",
      name: "Developer Free",
      monthlyPrice: "$0",
      annualPrice: "$0",
      cadence: "forever free",
      description: "Ideal for individual developers, evaluators, and portfolio testing with zero credit card required.",
      featured: false,
      ctaText: "Launch Live Console",
      ctaHref: "/dashboard",
      icon: Terminal,
      features: [
        "10 Free queries/day (Upstash sliding window)",
        "3 Preloaded corporate enterprise documents",
        "Deterministic chunking & citation anchoring",
        "Live token & latency telemetry console",
        "Word-by-word streaming markdown output",
        "Community Discord support & public API docs",
      ],
    },
    {
      id: "team",
      name: "Team & Startup",
      monthlyPrice: "$49",
      annualPrice: "$39",
      cadence: "per seat / month",
      billedNote: isAnnual ? "billed annually ($468/yr)" : "billed monthly",
      description: "For engineering and product teams requiring shared, cited knowledge across all repositories.",
      featured: true,
      badge: "MOST POPULAR",
      ctaText: "Start 14-Day Pilot",
      ctaHref: "/auth/signup",
      icon: Sparkles,
      features: [
        "Unlimited document queries & vector indexing",
        "Custom Upstash Redis rate-limit configuration",
        "Bring Your Own Key (BYOK) Gemini 1.5 & OpenAI",
        "Up to 250 enterprise documents per workspace",
        "Team audit logs and compliance exports",
        "Priority SSE streaming bandwidth (<100ms TTFT)",
        "Slack & Notion bi-directional sync",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Dedicated",
      monthlyPrice: "$199",
      annualPrice: "$159",
      cadence: "per seat / month",
      billedNote: isAnnual ? "billed annually ($1,908/yr)" : "billed monthly",
      description: "For regulated FinTech, legal firms, and corporate security teams requiring single tenancy.",
      featured: false,
      ctaText: "Request Custom Pilot",
      ctaHref: "/auth/signup",
      icon: Building2,
      features: [
        "Dedicated isolated VPC / on-premise deployment",
        "SOC 2 Type II audit report & GDPR compliance",
        "Okta / SAML Single Sign-On (SSO) with FIDO2 MFA",
        "99.99% Guaranteed uptime SLA with financial credits",
        "Custom semantic embedding model fine-tuning",
        "Dedicated Technical Account Manager & 24/7 pager SLA",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-xs">
            <Zap className="w-3.5 h-3.5 text-brand-600" />
            <span>SIMPLE, TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Predictable Plans for Every Team
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Start immediately with our free developer tier or deploy dedicated knowledge instances for your engineering team.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle annual billing"
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                isAnnual ? "bg-brand-600" : "bg-slate-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-xs ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-semibold ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
                Annual billing
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200 uppercase tracking-wide">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.featured
                    ? "bg-white border-2 border-brand-600 ring-4 ring-brand-50 shadow-mockup scale-[1.02] z-10"
                    : "bg-white border border-slate-200/90 shadow-card hover:border-slate-300 hover:shadow-cardHover"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-600 text-white tracking-wider uppercase shadow-xs">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        tier.featured ? "bg-brand-50 text-brand-600" : "bg-slate-100 text-slate-700"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">{tier.name}</h3>
                    </div>
                    {tier.featured && (
                      <span className="text-xs font-mono font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                        Tier 1
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 min-h-[34px] leading-relaxed font-sans">
                    {tier.description}
                  </p>

                  <div className="mt-6 flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-mono">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-sans">/{tier.cadence}</span>
                    </div>
                    {tier.billedNote && (
                      <span className="text-[11px] font-mono text-slate-400 mt-1">
                        {tier.billedNote}
                      </span>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                      Included Capabilities:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    href={tier.ctaHref}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold transition-all ${
                      tier.featured
                        ? "bg-brand-600 hover:bg-brand-700 text-white shadow-button hover:shadow-buttonHover active:scale-[0.98]"
                        : "bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-200"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom enterprise contact banner */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">Need custom air-gapped on-premise deployment or HIPAA BAA?</h4>
            <p className="text-xs text-slate-500">
              We provide dedicated solutions for high-compliance healthcare and financial environments.
            </p>
          </div>
          <button
            onClick={onRequestDemo}
            className="shrink-0 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-white text-xs font-bold text-slate-800 transition-all shadow-xs"
          >
            Talk to Solutions Engineer
          </button>
        </div>
      </div>
    </section>
  );
};
