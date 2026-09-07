"use client";

import React from "react";
import { Building2, Scale, Landmark, Shield, Award, Briefcase } from "lucide-react";

export const TrustBar: React.FC = () => {
  const logos = [
    { name: "Apex Advisory", subtitle: "CPA & ADVISORS", icon: Award },
    { name: "Sterling Legal", subtitle: "PARTNERS LLP", icon: Scale },
    { name: "Keystone Wealth", subtitle: "PRIVATE WEALTH", icon: Landmark },
    { name: "Summit Partners", subtitle: "TAX CONSULTANTS", icon: Shield },
    { name: "Horizon CPA Group", subtitle: "CHARTERED ACCOUNTANTS", icon: Building2 },
    { name: "Beacon Advisory", subtitle: "FAMILY OFFICE", icon: Briefcase },
  ];

  return (
    <div className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-8 font-sans">
          TRUSTED BY GROWING PROFESSIONAL SERVICE FIRMS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-700 hover:text-slate-900 transition-all duration-150 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:border-brand-300 group-hover:text-brand-600 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
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

