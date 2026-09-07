"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Upload,
  Shield,
  Lock,
  FileText,
  Star,
} from "lucide-react";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDemo }) => {
  const [selectedWorkspace, setSelectedWorkspace] = useState<"summit" | "sterling">("summit");

  const workspaces = {
    summit: {
      url: "https://summit-advisory.intakeiq.portal/onboarding/case-408",
      firmCode: "SA",
      firmName: "Summit Advisory Group",
      badge: "Client Portal",
      subInfo: "Case #408 • Apex Holdings LLC — Onboarding Package",
      progressLabel: "Onboarding Progress:",
      progressPct: "60%",
      progressWidth: "w-[60%]",
      documents: [
        {
          id: "doc-1",
          title: "Articles of Incorporation & Bylaws",
          tag: "REQUIRED",
          version: "v2.0",
          meta: "Corporate Formation • 2.4 MB (PDF)",
          status: "approved" as const,
        },
        {
          id: "doc-2",
          title: "2023 Audited Financial Statements",
          tag: "REQUIRED",
          version: "v1.0",
          meta: "Financial Disclosures • 8.1 MB (XLSX)",
          status: "review" as const,
        },
        {
          id: "doc-3",
          title: "Form W-9 / Tax ID Verification",
          tag: "REQUIRED",
          version: null,
          meta: "Tax Compliance",
          status: "upload" as const,
        },
      ],
    },
    sterling: {
      url: "https://sterling-legal.intakeiq.portal/onboarding/matter-102",
      firmCode: "SL",
      firmName: "Sterling Legal LLP",
      badge: "Client Portal",
      subInfo: "Matter #102 • Crestview Holdings — Retainer & Verification",
      progressLabel: "Onboarding Progress:",
      progressPct: "80%",
      progressWidth: "w-[80%]",
      documents: [
        {
          id: "doc-4",
          title: "Master Retainer & Fee Schedule",
          tag: "REQUIRED",
          version: "v3.0",
          meta: "Corporate Counsel • 1.8 MB (PDF)",
          status: "approved" as const,
        },
        {
          id: "doc-5",
          title: "Beneficial Ownership Information (BOI)",
          tag: "REQUIRED",
          version: "v1.2",
          meta: "FinCEN Regulatory Filing • 3.2 MB (PDF)",
          status: "review" as const,
        },
        {
          id: "doc-6",
          title: "Government-Issued ID & Proof of Address",
          tag: "REQUIRED",
          version: null,
          meta: "KYC Compliance & Identity Check",
          status: "upload" as const,
        },
      ],
    },
  };

  const current = workspaces[selectedWorkspace];

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden saas-grid border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/90 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span>Built for Accounting, Legal & Advisory Firms</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Client Onboarding, <br />
              <span className="text-brand-600">Without the Chaos</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              DocuBrain replaces email and spreadsheet onboarding with one branded
              client portal — collect forms and documents, and track every client&apos;s
              progress in real time.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-sm text-slate-600 pt-1">
              <div className="flex items-center text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                <span>4.8</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-slate-700">
                Trusted by 200+ professional service firms
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onRequestDemo}
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-button hover:shadow-buttonHover active:scale-[0.98] transition-all duration-150 flex items-center gap-2 text-base"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/dashboard"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-150 flex items-center gap-2 text-base"
              >
                <Play className="w-4 h-4 text-brand-600 fill-brand-600" />
                <span>See how it works</span>
              </Link>
            </div>

            {/* Feature Guarantees */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Zero client login friction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Per-tenant schema isolation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Bank-grade 256-bit encryption</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Browser Mockup (Matches User Screenshot) */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-mockup overflow-hidden">
              {/* Dark Navy Browser Chrome */}
              <div className="bg-[#0F172A] px-4 py-3 flex items-center justify-between border-b border-slate-800">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>

                {/* Address Bar */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-[#1E293B]/80 text-[11px] font-mono text-slate-300 max-w-[280px] truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="truncate">{current.url}</span>
                </div>

                {/* Workspace Switcher Buttons */}
                <div className="flex items-center bg-[#1E293B] p-0.5 rounded-lg border border-slate-700/60 text-xs">
                  <button
                    onClick={() => setSelectedWorkspace("summit")}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      selectedWorkspace === "summit"
                        ? "bg-brand-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Summit Advisory
                  </button>
                  <button
                    onClick={() => setSelectedWorkspace("sterling")}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      selectedWorkspace === "sterling"
                        ? "bg-brand-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Sterling Legal
                  </button>
                </div>
              </div>

              {/* Mockup Portal Body */}
              <div className="p-5 sm:p-6 bg-white space-y-4">
                {/* Portal Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm flex-shrink-0">
                      {current.firmCode}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-slate-900 text-base">
                          {current.firmName}
                        </span>
                        <span className="bg-brand-50 text-brand-600 border border-brand-200/70 text-[10px] font-bold px-2 py-0.5 rounded-md">
                          {current.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {current.subInfo}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="text-left sm:text-right flex-shrink-0">
                    <div className="flex sm:justify-end items-center gap-2 text-xs font-semibold text-slate-600">
                      <span>{current.progressLabel}</span>
                      <span className="font-bold text-slate-900">{current.progressPct} Complete</span>
                    </div>
                    <div className="w-36 bg-slate-100 rounded-full h-2 overflow-hidden mt-1.5">
                      <div
                        className={`bg-brand-600 h-full rounded-full transition-all duration-300 ${current.progressWidth}`}
                      />
                    </div>
                  </div>
                </div>

                {/* 3 Document Rows (Exact Match to Screenshot) */}
                <div className="space-y-3 pt-1">
                  {current.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      {/* Left: Icon, Title, Badges, Meta */}
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="mt-0.5">
                          {doc.status === "approved" && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          )}
                          {doc.status === "review" && (
                            <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          )}
                          {doc.status === "upload" && (
                            <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-slate-400" />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-sm truncate">
                              {doc.title}
                            </span>
                            <span className="bg-rose-50 text-rose-600 border border-rose-200 text-[9px] font-extrabold px-1.5 py-0.5 rounded tracking-wider uppercase">
                              {doc.tag}
                            </span>
                            {doc.version && (
                              <span className="bg-slate-100 text-slate-600 text-[10px] font-mono px-1.5 py-0.5 rounded">
                                {doc.version}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-1 font-medium">
                            {doc.meta}
                          </p>
                        </div>
                      </div>

                      {/* Right: State Action Pill / Button */}
                      <div className="flex-shrink-0 self-start sm:self-center">
                        {doc.status === "approved" && (
                          <div className="inline-flex items-center gap-1.5 border border-emerald-300 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Approved</span>
                          </div>
                        )}

                        {doc.status === "review" && (
                          <div className="inline-flex items-center gap-1.5 border border-amber-300 bg-amber-50 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            <span>Under Review</span>
                          </div>
                        )}

                        {doc.status === "upload" && (
                          <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm transition-all"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Upload File</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

