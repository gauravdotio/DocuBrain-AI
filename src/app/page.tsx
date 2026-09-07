"use client";

import React from "react";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { InteractiveMockup } from "@/components/landing/InteractiveMockup";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col selection:bg-brand-500/30 selection:text-brand-200">
      {/* Sticky Modern Dark Header */}
      <LandingNavbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <InteractiveMockup />
        <UseCasesSection />
        <ArchitectureSection />
        <RoiCalculator />
        <PricingSection />
        <CtaSection />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
