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
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-900 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 z-30">
        <div>
          {/* Brand Logo Header */}
          <div className="h-16 px-5 border-b border-slate-200 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-tealAccent-500 flex items-center justify-center text-white shadow-sm">
                <Brain className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                DocuBrain<span className="text-brand-500">.ai</span>
              </span>
            </Link>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200/80 font-semibold">
              SaaS
            </span>
          </div>

          {/* Active Workspace / Organization Selector */}
          <div className="p-3 border-b border-slate-100">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="text-[10px] uppercase font-mono text-slate-400 font-semibold">
                Enterprise Workspace
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-bold text-slate-800 truncate">
                  CloudMesh Global Corp
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
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
                      ? "bg-brand-50 text-brand-700 border border-brand-200/80 shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 ${isActive ? "text-brand-600" : "text-slate-400"}`} />
                    <span className="truncate">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-brand-100 text-brand-800 font-bold"
                          : "bg-slate-100 text-slate-500"
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
        <div className="p-3 border-t border-slate-200 bg-slate-50/50 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-800 truncate">{currentUser.name}</div>
                <div className="text-[10px] text-slate-400 truncate">{currentUser.role}</div>
              </div>
            </div>
            <Link
              href="/auth/login"
              className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title="Switch user / Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="px-1 text-center">
            <Link
              href="/"
              className="text-[11px] font-medium text-slate-500 hover:text-brand-600 flex items-center justify-center gap-1 transition-colors"
            >
              <span>← View Marketing Site</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main App Canvas */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 px-6 border-b border-slate-200 bg-white flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-800">DocuBrain</span>
            <span>/</span>
            <span className="capitalize text-slate-600">
              {pathname === "/dashboard"
                ? "Live RAG Workspace"
                : pathname.replace("/dashboard/", "").replace("-", " ")}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Rate Limit Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">{rateLimit ? rateLimit.remaining : 10}/10 Queries</span>
              <span className="text-[10px] text-emerald-600 font-sans hidden sm:inline">• Upstash Guardrail</span>
            </div>

            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <span>Public Landing Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Page Children */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
