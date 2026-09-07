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
    <div className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Trusted by modern engineering, legal & financial teams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 grayscale hover:grayscale-0 transition-all duration-200 opacity-85 hover:opacity-100 hover:-translate-y-0.5 group"
              >
                <Icon className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" />
                <div className="text-left">
                  <span className="block font-bold text-xs text-slate-800 tracking-tight leading-tight">
                    {logo.name}
                  </span>
                  <span className="block text-[9px] text-slate-500 tracking-wider uppercase font-medium">
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
