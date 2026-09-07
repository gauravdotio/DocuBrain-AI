"use client";

import React from "react";
import { Building2, Scale, Landmark, Award, Shield, Briefcase } from "lucide-react";

export const TrustBar: React.FC = () => {
  const logos = [
    { name: "CloudMesh", subtitle: "Cloud Infrastructure", icon: Building2 },
    { name: "Sterling Legal", subtitle: "Corporate Counsel", icon: Scale },
    { name: "FinPulse", subtitle: "SaaS Financials", icon: Landmark },
    { name: "NexusGuard", subtitle: "SOC 2 Compliance", icon: Shield },
    { name: "Apex Advisory", subtitle: "Enterprise Risk", icon: Award },
    { name: "Keystone Ops", subtitle: "Engineering Lead", icon: Briefcase },
  ];

  return (
    <div className="py-10 bg-ink-900 border-b border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-mono uppercase tracking-widest text-ink-400 mb-8">
          Trusted by modern engineering, legal & financial teams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-ink-400 hover:text-white transition-all duration-200 opacity-75 hover:opacity-100 hover:-translate-y-0.5 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-ink-800 border border-ink-700/80 flex items-center justify-center group-hover:border-amberAccent-500/40 group-hover:text-amberAccent-400 transition-colors">
                  <Icon className="w-4 h-4 text-ink-400 group-hover:text-amberAccent-400 transition-colors" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-xs text-ink-200 group-hover:text-white tracking-tight leading-tight transition-colors">
                    {logo.name}
                  </span>
                  <span className="block text-[9px] text-ink-500 tracking-wider uppercase font-mono">
                    {logo.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
