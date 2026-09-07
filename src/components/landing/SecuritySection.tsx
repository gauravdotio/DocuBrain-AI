"use client";

import React from "react";
import { ShieldCheck, Lock, Database, FileCheck, Key, EyeOff } from "lucide-react";

export const SecuritySection: React.FC = () => {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Zero Model Training Guarantee",
      description: "Customer documents and queries are never stored or used to train third-party AI models. Every prompt context is ephemeral.",
    },
    {
      icon: Lock,
      title: "Bank-Grade AES-256 Encryption",
      description: "All indexed vectors and document caches are encrypted at rest with AES-256-GCM and in transit with mandatory TLS 1.3 cipher suites.",
    },
    {
      icon: Database,
      title: "Upstash Redis Token Isolation",
      description: "Granular sliding-window rate limiters prevent API abuse and provide verifiable telemetry per user session and IP address.",
    },
    {
      icon: EyeOff,
      title: "Granular Tenant Boundaries",
      description: "Strict multi-tenant security architecture prevents cross-organization context leakage or unauthorized vector sharing.",
    },
  ];

  return (
    <section id="security" className="py-20 sm:py-24 bg-ink-900 border-b border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-850 border border-ink-700 text-amberAccent-400 text-xs font-mono">
            <Lock className="w-3.5 h-3.5 text-amberAccent-400" />
            <span>ENTERPRISE SECURITY STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Regulated Industries & Sensitive Data
          </h2>
          <p className="text-base text-ink-300 leading-relaxed font-sans">
            Your contracts, financial models, and code specs are protected by enterprise encryption and strict tenant isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-ink-950 border border-ink-700/80 shadow-studio flex flex-col justify-between space-y-4 hover:border-amberAccent-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-ink-850 border border-ink-700 text-amberAccent-400 flex items-center justify-center shadow-glowAmber group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white tracking-tight">{c.title}</h3>
                  <p className="text-xs text-ink-400 leading-relaxed font-sans">
                    {c.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
