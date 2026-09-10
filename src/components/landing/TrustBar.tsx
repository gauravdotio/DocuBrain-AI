"use client";

import React from "react";
import { Cpu, Terminal, Database, Shield, Zap, Globe } from "lucide-react";

export const TrustBar: React.FC = () => {
  const logos = [
    { name: "CloudMesh", subtitle: "CLOUD INFRASTRUCTURE", icon: Cpu },
    { name: "NexusGuard", subtitle: "INFOSEC & COMPLIANCE", icon: Shield },
    { name: "FinPulse", subtitle: "FINTECH INTELLIGENCE", icon: Zap },
    { name: "HyperScale", subtitle: "DATA PLATFORMS", icon: Database },
    { name: "VectorStack", subtitle: "LLM PIPELINES", icon: Terminal },
    { name: "GlobalEdge", subtitle: "DISTRIBUTED SYSTEMS", icon: Globe },
  ];

  return (
    <div className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8 font-sans">
          TRUSTED BY OVER 1,200+ HIGH-GROWTH ENGINEERING & TECH TEAMS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-700 hover:text-slate-900 transition-all duration-150 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:border-brand-300 group-hover:text-brand-600 transition-colors shadow-subtle">
                  <Icon className="w-4 h-4 text-slate-500 group-hover:text-brand-600 transition-colors" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-xs text-slate-800 group-hover:text-slate-900 tracking-tight leading-tight transition-colors">
                    {logo.name}
                  </span>
                  <span className="block text-[9px] text-slate-400 font-semibold tracking-wider uppercase">
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


