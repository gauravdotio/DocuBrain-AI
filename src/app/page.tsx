"use client";

import React, { useState } from "react";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustBar } from "@/components/landing/TrustBar";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import DemoModal from "@/components/ui/DemoModal";

export default function LandingPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 flex flex-col selection:bg-amberAccent-500 selection:text-ink-950">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Enterprise Header */}
      <LandingNavbar onRequestDemo={() => setIsDemoOpen(true)} />

      {/* Main Marketing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Tilted Mockup */}
        <HeroSection onRequestDemo={() => setIsDemoOpen(true)} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Tabbed Features Showcase */}
        <ArchitectureSection />

        {/* 4. Industry Use Cases */}
        <UseCasesSection />

        {/* 5. Token Budget & ROI Calculator */}
        <RoiCalculator />

        {/* 6. Enterprise Security Matrix */}
        <SecuritySection />

        {/* 7. Transparent Pricing */}
        <PricingSection onRequestDemo={() => setIsDemoOpen(true)} />

        {/* 8. Final CTA Banner */}
        <CtaSection onRequestDemo={() => setIsDemoOpen(true)} />
      </main>

      {/* Footer */}
      <LandingFooter />

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
