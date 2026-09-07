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
    <div className="min-h-screen bg-ink-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 neural-grid">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violetAccent-600 via-violetAccent-500 to-cyanAccent-400 flex items-center justify-center text-white shadow-glowViolet border border-white/20 group-hover:scale-105 transition-transform">
            <Brain className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            DocuBrain<span className="text-cyanAccent-400 font-mono text-sm ml-1 px-1.5 py-0.5 rounded bg-cyanAccent-500/15 border border-cyanAccent-500/30">AI</span>
          </span>
        </Link>
        <p className="mt-2 text-xs text-ink-400 font-medium">
          Enterprise Knowledge Engine & RAG Workspace
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-lg px-4">
        <div className="bg-ink-900 py-8 px-6 sm:px-10 rounded-2xl shadow-studio border border-ink-700/80">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white tracking-tight">Sign in to your organization</h2>
            <p className="text-xs text-ink-400 mt-1">
              Enter your enterprise credentials or click an instant demo profile below.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-ink-200 mb-1.5">
                Work Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-white placeholder:text-ink-500 text-xs sm:text-sm focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-200 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-white placeholder:text-ink-500 text-xs sm:text-sm focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-violetAccent-600 via-violetAccent-500 to-cyanAccent-500 hover:brightness-110 active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-xl shadow-glowDual transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>{isSubmitting ? "Authenticating..." : "Sign In to Studio Workspace"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* 1-Click Instant Demo Profiles */}
          <div className="mt-8 pt-6 border-t border-ink-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-cyanAccent-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
                <span>Instant 1-Click Demo Profiles</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Zero Password Needed</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Profile 1 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Enterprise Architect", "Sarah Jenkins", "sarah@cloudmesh.io")}
                disabled={isSubmitting}
                className="p-3 bg-ink-850 hover:bg-ink-800 hover:border-cyanAccent-500/50 rounded-xl border border-ink-700 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-cyanAccent-400 font-bold text-xs">
                  <Cpu className="w-3.5 h-3.5 shrink-0" />
                  <span>Sarah Jenkins</span>
                </div>
                <div className="text-[10px] text-ink-400 mt-0.5 truncate">Lead Architect (SLA Specs)</div>
              </button>

              {/* Profile 2 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Compliance Lead", "Marcus Sterling", "marcus@nexusguard.io")}
                disabled={isSubmitting}
                className="p-3 bg-ink-850 hover:bg-ink-800 hover:border-violetAccent-500/50 rounded-xl border border-ink-700 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-violetAccent-400 font-bold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Marcus Sterling</span>
                </div>
                <div className="text-[10px] text-ink-400 mt-0.5 truncate">Compliance (SOC 2 Audit)</div>
              </button>

              {/* Profile 3 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Finance Director", "Elena Rostova", "elena@finpulse.io")}
                disabled={isSubmitting}
                className="p-3 bg-ink-850 hover:bg-ink-800 hover:border-emerald-500/50 rounded-xl border border-ink-700 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Elena Rostova</span>
                </div>
                <div className="text-[10px] text-ink-400 mt-0.5 truncate">VP Finance (FY2026 10-K)</div>
              </button>

              {/* Profile 4 */}
              <button
                type="button"
                onClick={() => handleQuickLogin("Recruiter / Evaluator", "Guest Evaluator", "evaluator@guest.io")}
                disabled={isSubmitting}
                className="p-3 bg-ink-850 hover:bg-ink-800 hover:border-cyanAccent-500/50 rounded-xl border border-ink-700 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-cyanAccent-300 font-bold text-xs">
                  <UserCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Guest Evaluator</span>
                </div>
                <div className="text-[10px] text-ink-400 mt-0.5 truncate">Full Sandbox Access</div>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-ink-400">
            Don&apos;t have an organization account?{" "}
            <Link href="/auth/signup" className="font-bold text-cyanAccent-400 hover:text-cyanAccent-300">
              Create Organization Tenant →
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] text-ink-500 flex items-center justify-center gap-4 font-mono">
          <Link href="/" className="hover:text-white">
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
