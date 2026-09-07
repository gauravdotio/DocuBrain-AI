"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Brain,
  MessageSquare,
  FileText,
  BarChart3,
  ShieldCheck,
  Key,
  Layers,
  LogOut,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Shield,
} from "lucide-react";
import { RateLimitStatus } from "@/types";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState({ name: "Sarah Jenkins", role: "Lead Architect", email: "sarah@cloudmesh.io" });
  const [rateLimit, setRateLimit] = useState<RateLimitStatus | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("docubrain_user");
    if (saved) {
      try {
        setCurrentUser(JSON.parse(saved));
      } catch (e) {}
    }

    fetch("/api/rate-limit")
      .then((res) => res.json())
      .then((data) => setRateLimit(data))
      .catch(() => {});
  }, []);

  const navItems = [
    {
      name: "Live RAG Workspace",
      href: "/dashboard",
      icon: MessageSquare,
      badge: "Active",
    },
    {
      name: "Documents Library",
      href: "/dashboard/documents",
      icon: FileText,
      badge: "3 Ready",
    },
    {
      name: "Token Budget & Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
      badge: "Upstash",
    },
    {
      name: "Compliance Audit Trail",
      href: "/dashboard/audit",
      icon: ShieldCheck,
      badge: "SOC 2",
    },
  ];

  return (
    <div className="min-h-screen bg-ink-950 flex flex-col md:flex-row text-ink-100 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-ink-900 border-r border-ink-800 flex flex-col justify-between shrink-0 z-30">
        <div>
          {/* Brand Logo Header */}
          <div className="h-16 px-5 border-b border-ink-800 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violetAccent-600 via-violetAccent-500 to-cyanAccent-400 flex items-center justify-center text-white shadow-glowViolet border border-white/20 group-hover:scale-105 transition-transform">
                <Brain className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                DocuBrain<span className="text-cyanAccent-400 font-mono text-xs ml-1 px-1.5 py-0.5 rounded bg-cyanAccent-500/15 border border-cyanAccent-500/30">AI</span>
              </span>
            </Link>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violetAccent-500/15 text-violetAccent-400 border border-violetAccent-500/30 font-semibold">
              STUDIO
            </span>
          </div>

          {/* Active Workspace / Organization Selector */}
          <div className="p-3 border-b border-ink-800/80">
            <div className="p-2.5 rounded-xl bg-ink-850 border border-ink-700/80 text-left">
              <div className="text-[10px] uppercase font-mono text-ink-400 font-semibold">
                Enterprise Workspace
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-bold text-ink-200 truncate">
                  CloudMesh Global Corp
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-glowCyan shrink-0" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-ink-800 text-cyanAccent-400 border border-cyanAccent-500/40 shadow-glowCyan"
                      : "text-ink-400 hover:text-white hover:bg-ink-850 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 ${isActive ? "text-cyanAccent-400" : "text-ink-400"}`} />
                    <span className="truncate">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-cyanAccent-500/20 text-cyanAccent-400 font-bold border border-cyanAccent-500/30"
                          : "bg-ink-800 text-ink-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile & Footer */}
        <div className="p-3 border-t border-ink-800 bg-ink-900/60 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-xl bg-ink-850 border border-ink-700/80">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-violetAccent-500/20 text-violetAccent-400 border border-violetAccent-500/30 font-bold text-xs flex items-center justify-center shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-ink-200 truncate">{currentUser.name}</div>
                <div className="text-[10px] text-ink-400 truncate">{currentUser.role}</div>
              </div>
            </div>
            <Link
              href="/auth/login"
              className="p-1 text-ink-400 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg transition-colors"
              title="Switch user / Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="px-1 text-center">
            <Link
              href="/"
              className="text-[11px] font-medium text-ink-400 hover:text-cyanAccent-400 flex items-center justify-center gap-1 transition-colors"
            >
              <span>← View Marketing Site</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main App Canvas */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 px-6 border-b border-ink-800 bg-ink-900 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <span className="font-semibold text-white">DocuBrain</span>
            <span>/</span>
            <span className="capitalize text-cyanAccent-400 font-mono">
              {pathname === "/dashboard"
                ? "Live RAG Workspace"
                : pathname.replace("/dashboard/", "").replace("-", " ")}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Rate Limit Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyanAccent-500/30 bg-ink-850 text-cyanAccent-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold">{rateLimit ? rateLimit.remaining : 10}/10 Queries</span>
              <span className="text-[10px] text-ink-400 font-sans hidden sm:inline">• Upstash Guardrail</span>
            </div>

            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-ink-300 hover:text-white bg-ink-800 hover:bg-ink-750 border border-ink-700 rounded-lg transition-colors"
            >
              <span>Public Landing</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Page Children */}
        <div className="flex-1 min-h-0 overflow-hidden bg-ink-950">
          {children}
        </div>
      </div>
    </div>
  );
}
