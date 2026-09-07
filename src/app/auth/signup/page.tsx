"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Brain, ArrowRight, Building2, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [orgName, setOrgName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      localStorage.setItem("docubrain_user", JSON.stringify({ name: fullName, role: "Org Admin", email, org: orgName }));
      router.push("/dashboard");
    }, 600);
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
          Create New Enterprise Knowledge Organization
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-lg px-4">
        <div className="bg-ink-900 py-8 px-6 sm:px-10 rounded-2xl shadow-studio border border-ink-700/80">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white tracking-tight">Start your 14-day team pilot</h2>
            <p className="text-xs text-ink-400 mt-1">
              Zero credit card required. Includes 10 free daily Upstash Redis queries.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-ink-200 mb-1.5">
                Organization / Company Name
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Acme Global Inc."
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-white placeholder:text-ink-500 text-xs sm:text-sm focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-200 mb-1.5">
                Your Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Sarah Jenkins"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-white placeholder:text-ink-500 text-xs sm:text-sm focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 outline-none transition-all"
                />
              </div>
            </div>

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
                  placeholder="sarah@acme.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-white placeholder:text-ink-500 text-xs sm:text-sm focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-200 mb-1.5">
                Create Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-ink-850 border border-ink-700 rounded-xl text-white placeholder:text-ink-500 text-xs sm:text-sm focus:border-cyanAccent-500 focus:ring-1 focus:ring-cyanAccent-500 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-violetAccent-600 via-violetAccent-500 to-cyanAccent-500 hover:brightness-110 active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-xl shadow-glowDual transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>{isSubmitting ? "Provisioning Tenant..." : "Create Organization Workspace"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-ink-400">
            Already have an organization?{" "}
            <Link href="/auth/login" className="font-bold text-cyanAccent-400 hover:text-cyanAccent-300">
              Sign In Instead →
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] text-ink-500 font-mono">
          <Link href="/" className="hover:text-white">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
