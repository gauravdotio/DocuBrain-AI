"use client";

import React from "react";
import Link from "next/link";
import { Check, Zap, Sparkles, Shield, ArrowRight } from "lucide-react";

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: "Developer Free",
      price: "$0",
      cadence: "forever free",
      description: "Ideal for individual developers, evaluators, and portfolio testing.",
      featured: false,
      ctaText: "Launch Live Console",
      ctaHref: "/app",
      features: [
        "10 Free queries/day (Upstash sliding window)",
        "3 Preloaded corporate enterprise documents",
        "Interactive citation pills with passage highlighting",
        "Word-by-word streaming markdown UI",
        "Real-time token & latency telemetry console",
        "Zero setup / instant evaluation mode",
      ],
    },
    {
      name: "Team & Startup",
      price: "$39",
      cadence: "per seat / month",
      description: "For engineering and product teams requiring shared, cited knowledge.",
      featured: true,
      ctaText: "Start Team Pilot",
      ctaHref: "/app",
      badge: "MOST POPULAR",
      features: [
        "Unlimited document queries & vector indexing",
        "Custom Upstash Redis rate-limit configuration",
        "Bring Your Own Key (BYOK) Gemini & OpenAI",
        "Up to 250 enterprise documents per workspace",
        "Team audit logs and compliance exports",
        "Priority SSE streaming bandwidth (<100ms TTFT)",
      ],
    },
    {
      name: "Enterprise Dedicated",
      price: "$199",
      cadence: "per seat / month",
      description: "For regulated FinTech, legal firms, and corporate security teams.",
      featured: false,
      ctaText: "Contact Enterprise Ops",
      ctaHref: "/app",
      features: [
        "Dedicated isolated VPC deployment",
        "SOC 2 Type II audit report & GDPR compliance",
        "Okta / SAML Single Sign-On (SSO) with FIDO2 MFA",
        "99.99% Guaranteed uptime SLA with financial credits",
        "Custom semantic embedding model fine-tuning",
        "Dedicated Technical Account Manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable Plans for Every Team
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Start immediately with our free developer tier or deploy dedicated knowledge instances for your engineering team.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                tier.featured
                  ? "bg-gradient-to-b from-surface-card to-surface-card/90 border-2 border-brand-500 shadow-2xl shadow-brand-500/20 scale-[1.03]"
                  : "bg-surface-card border border-surface-border"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-500 text-white tracking-wider shadow-md">
                  {tier.badge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white tracking-tight">{tier.name}</h3>
                  {tier.featured && <Zap className="w-4 h-4 text-accent-cyan" />}
                </div>

                <p className="text-xs text-slate-400 mt-2 min-h-[32px]">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-400 font-sans">/{tier.cadence}</span>
                </div>

                <div className="mt-8 pt-6 border-t border-surface-border space-y-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Included Capabilities:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-border">
                <Link
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    tier.featured
                      ? "bg-gradient-to-r from-brand-600 to-accent-violet hover:from-brand-500 hover:to-accent-violet/90 text-white shadow-lg shadow-brand-500/25"
                      : "bg-surface-hover hover:bg-surface-border text-white border border-surface-border"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
