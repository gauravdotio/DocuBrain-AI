"use client";

import React from "react";
import Link from "next/link";
import { Check, Zap, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onRequestDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestDemo }) => {
  const tiers = [
    {
      name: "Developer Free",
      price: "$0",
      cadence: "forever free",
      description: "Ideal for individual developers, evaluators, and portfolio testing.",
      featured: false,
      ctaText: "Launch Live Console",
      ctaHref: "/dashboard",
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
      price: "$49",
      cadence: "per seat / month",
      description: "For engineering and product teams requiring shared, cited knowledge.",
      featured: true,
      ctaText: "Start 14-Day Pilot",
      ctaHref: "/auth/signup",
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
      ctaText: "Request Custom Pilot",
      ctaHref: "/auth/signup",
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
    <section id="pricing" className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-sm">
            <Zap className="w-3.5 h-3.5 text-brand-600" />
            <span>SIMPLE, TRANSPARENT PLANS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Predictable Plans for Every Team
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Start immediately with our free developer tier or deploy dedicated knowledge instances for your engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                tier.featured
                  ? "bg-white border-2 border-brand-600 ring-4 ring-brand-50 shadow-mockup scale-[1.02]"
                  : "bg-white border border-slate-200 shadow-card hover:border-slate-300"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-600 text-white tracking-wider uppercase shadow-sm">
                  {tier.badge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">{tier.name}</h3>
                  {tier.featured && <Zap className="w-4 h-4 text-brand-600" />}
                </div>

                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-medium">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-500 font-sans">/{tier.cadence}</span>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Included Capabilities:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    tier.featured
                      ? "bg-brand-600 hover:bg-brand-700 text-white shadow-button hover:shadow-buttonHover active:scale-[0.98]"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
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

