"use client";

import React, { useState } from "react";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustBar } from "@/components/landing/TrustBar";
import { BentoGridSection } from "@/components/landing/BentoGridSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import DemoModal from "@/components/ui/DemoModal";

export default function LandingPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-brand-100 selection:text-brand-900 font-sans antialiased">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Enterprise Header */}
      <LandingNavbar onRequestDemo={() => setIsDemoOpen(true)} />

      {/* Main Marketing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Neural RAG Simulator */}
        <HeroSection onRequestDemo={() => setIsDemoOpen(true)} />

        {/* 2. Enterprise Trust Bar */}
        <TrustBar />

        {/* 3. 2026 Bento Grid - Deep Architecture & Core Capabilities */}
        <BentoGridSection />

        {/* 4. Legacy Wiki Search vs DocuBrain Engine Comparison */}
        <ComparisonSection />

        {/* 5. Persona-Driven Use Cases (Engineering, Product, Legal, Finance) */}
        <UseCasesSection />

        {/* 6. Upstash Redis Token Budget & ROI Calculator */}
        <RoiCalculator />

        {/* 7. Bank-Grade Security & Zero Training Matrix */}
        <SecuritySection />

        {/* 8. Transparent Pricing with Annual/Monthly Billing Toggle */}
        <PricingSection onRequestDemo={() => setIsDemoOpen(true)} />

        {/* 9. Interactive FAQ Accordion */}
        <FaqSection />

        {/* 10. High-Conversion Final CTA Banner */}
        <CtaSection onRequestDemo={() => setIsDemoOpen(true)} />
      </main>

      {/* Modern Footer */}
      <LandingFooter />

      {/* Interactive Demo Request Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
