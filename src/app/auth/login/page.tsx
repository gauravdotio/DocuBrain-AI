"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Brain,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  UserCheck,
  Cpu,
  Layers,
  FileCheck,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      localStorage.setItem("docubrain_user", JSON.stringify({ name: "Demo User", role: "Architect", email }));
      router.push("/dashboard");
    }, 600);
  };

  const handleQuickLogin = (role: string, name: string, userEmail: string) => {
    setIsSubmitting(true);
    localStorage.setItem("docubrain_user", JSON.stringify({ name, role, email: userEmail }));
    setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 subtle-grid">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-tealAccent-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Brain className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            DocuBrain<span className="text-brand-500">.ai</span>
          </span>
        </Link>
        <p className="mt-2 text-xs text-slate-500 font-medium">
          Enterprise Knowledge Engine & RAG Workspace
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-lg px-4">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl shadow-card border border-slate-200">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">Sign in to your organization</h2>
            <p className="text-xs text-slate-500 mt-1">
              Enter your enterprise credentials or click an instant demo profile below.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Work Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>{isSubmitting ? "Authenticating..." : "Sign In to Workspace"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* 1-Click Instant Demo Profiles */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-600 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant 1-Click Demo Profiles</span>
              </div>
              <span className="text-[10px] text-slate-400">Zero Password Needed</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Profile 1 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Enterprise Architect", "Sarah Jenkins", "sarah@cloudmesh.io")}
                disabled={isSubmitting}
                className="p-3 bg-slate-50/80 hover:bg-brand-50/70 hover:border-brand-300 rounded-xl border border-slate-200 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-brand-700 font-bold text-xs">
                  <Cpu className="w-3.5 h-3.5 shrink-0" />
                  <span>Sarah Jenkins</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Lead Architect (SLA Specs)</div>
              </button>

              {/* Profile 2 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Compliance Lead", "Marcus Sterling", "marcus@nexusguard.io")}
                disabled={isSubmitting}
                className="p-3 bg-slate-50/80 hover:bg-teal-50/70 hover:border-teal-300 rounded-xl border border-slate-200 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-teal-700 font-bold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Marcus Sterling</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Compliance (SOC 2 Audit)</div>
              </button>

              {/* Profile 3 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Finance Director", "Elena Rostova", "elena@finpulse.io")}
                disabled={isSubmitting}
                className="p-3 bg-slate-50/80 hover:bg-amber-50/70 hover:border-amber-300 rounded-xl border border-slate-200 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-amber-700 font-bold text-xs">
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Elena Rostova</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">VP Finance (FY2026 10-K)</div>
              </button>

              {/* Profile 4 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Recruiter / Evaluator", "Guest Evaluator", "evaluator@guest.io")}
                disabled={isSubmitting}
                className="p-3 bg-slate-50/80 hover:bg-purple-50/70 hover:border-purple-300 rounded-xl border border-slate-200 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-purple-700 font-bold text-xs">
                  <UserCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Guest Evaluator</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Full Sandbox Access</div>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-500">
            Don&apos;t have an organization account?{" "}
            <Link href="/auth/signup" className="font-bold text-brand-600 hover:underline">
              Create Organization Tenant →
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] text-slate-400 flex items-center justify-center gap-4">
          <Link href="/" className="hover:text-slate-600">
            ← Return to Home
          </Link>
          <span>•</span>
          <span>SOC 2 Type II Certified</span>
          <span>•</span>
          <span>AES-256 Bit Encryption</span>
        </div>
      </div>
    </div>
  );
}
