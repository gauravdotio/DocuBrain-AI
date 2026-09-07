"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Building2, User } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg bg-ink-900 rounded-2xl shadow-studio border border-ink-700 p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-ink-400 hover:text-white hover:bg-ink-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Demo Scheduled!</h3>
            <p className="text-xs text-ink-400 max-w-xs mx-auto font-sans">
              Our enterprise solutions team will reach out with customized sandbox credentials.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-cyanAccent-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-cyanAccent-400" />
              <span>Enterprise VIP Walkthrough</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Schedule a 15-Min Live Demo</h2>
            <p className="text-xs text-ink-400 mt-1 font-sans">
              See how DocuBrain indexes your company contracts and specs with zero hallucinations.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-ink-200 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-xs sm:text-sm text-white placeholder:text-ink-500 outline-none focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-200 mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-xs sm:text-sm text-white placeholder:text-ink-500 outline-none focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-200 mb-1">Company Name</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="CloudMesh Inc."
                    className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-xs sm:text-sm text-white placeholder:text-ink-500 outline-none focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-violetAccent-600 via-violetAccent-500 to-cyanAccent-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm rounded-xl shadow-glowDual transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-ink-800 flex items-center justify-between text-[11px] text-ink-400">
              <span className="flex items-center gap-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                SOC 2 Type II Certified
              </span>
              <Link href="/dashboard" onClick={onClose} className="font-bold text-cyanAccent-400 hover:text-cyanAccent-300 transition-colors">
                Or enter Instant Studio →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
