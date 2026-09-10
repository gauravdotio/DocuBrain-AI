"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does DocuBrain use our proprietary documents to train public AI models?",
      a: "Never. We enforce a strict Zero Model Training guarantee. Documents and queries are processed through ephemeral vector contexts and are never retained or utilized by third-party model providers to train or fine-tune public foundation models.",
    },
    {
      q: "How does the Upstash Redis rate-limit guardrail work?",
      a: "DocuBrain integrates with @upstash/ratelimit to maintain a 24-hour sliding window per organization. Free tiers are capped at 10 queries/day to prevent runaway token spend. If external Redis credentials are not configured, an automated in-memory fallback guarantees uninterrupted local evaluation.",
    },
    {
      q: "How does DocuBrain eliminate hallucinations in complex contracts and RFCs?",
      a: "We utilize deterministic sliding-window chunking (350 tokens with 50-token overlap) combined with Google Gemini 1.5 Flash Vision. Every streamed answer requires passage coordinate validation before being emitted, displaying clickable citation pills directly in the response.",
    },
    {
      q: "Can we bring our own Gemini or OpenAI API keys?",
      a: "Yes. In the Studio workspace, you can easily input your own Google Gemini API key via the Key Settings modal. This bypasses the default demo rate limits and allows unlimited high-throughput production queries.",
    },
    {
      q: "What document formats are natively supported for ingestion?",
      a: "DocuBrain natively parses and indexes enterprise PDFs, Markdown files, plain text documents (.txt), legal agreements (.docx), and structured JSON specifications with automatic page and paragraph numbering.",
    },
    {
      q: "Can DocuBrain be deployed inside our dedicated VPC?",
      a: "Yes. Enterprise tier subscribers can deploy DocuBrain inside dedicated AWS, GCP, or Azure VPCs with SAML 2.0 / Okta SSO, custom role-based access control (RBAC), and SOC 2 Type II audit logging.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-600 text-xs font-semibold shadow-subtle">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>

          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Common questions about DocuBrain&apos;s retrieval pipeline, security standards, and token budgeting.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white transition-all shadow-subtle overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-brand-50 text-brand-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
