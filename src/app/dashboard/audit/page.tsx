"use client";

import React from "react";
import { ShieldCheck, Clock, FileCheck, CheckCircle2 } from "lucide-react";

export default function AuditPage() {
  const auditLogs = [
    {
      id: "audit-101",
      timestamp: "Today, 11:28 AM",
      user: "Sarah Jenkins (Architect)",
      query: "What is the Service Credit percentage if monthly uptime drops below 99.0%?",
      document: "CloudMesh Enterprise SLA 2026",
      citation: "Page 2, Clause ¶ 1",
      latency: "164ms",
      confidence: "98%",
    },
    {
      id: "audit-102",
      timestamp: "Today, 10:14 AM",
      user: "Marcus Sterling (Compliance)",
      query: "What is the mandatory response SLA for a P1 Critical incident?",
      document: "NexusGuard SOC 2 Type II Playbook",
      citation: "Page 2, Clause ¶ 1",
      latency: "148ms",
      confidence: "99%",
    },
    {
      id: "audit-103",
      timestamp: "Yesterday, 04:45 PM",
      user: "Elena Rostova (Finance)",
      query: "What was our ending ARR for FY2026 and how much did it grow YoY?",
      document: "FinPulse FY2026 Financial Operations",
      citation: "Page 1, Clause ¶ 1",
      latency: "172ms",
      confidence: "96%",
    },
    {
      id: "audit-104",
      timestamp: "Yesterday, 02:10 PM",
      user: "David Chen (Legal Counsel)",
      query: "What cryptographic standards and KMS key rotation cycles are enforced?",
      document: "CloudMesh Enterprise SLA 2026",
      citation: "Page 3, Clause ¶ 2",
      latency: "155ms",
      confidence: "97%",
    },
  ];

  return (
    <div className="p-6 sm:p-8 space-y-6 h-full overflow-y-auto bg-ink-950 text-ink-100">
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">
          Compliance & Verification Audit Trail
        </h1>
        <p className="text-xs text-ink-400 mt-0.5">
          Immutable audit record of every document query, citation source, and compliance match.
        </p>
      </div>

      <div className="bg-ink-900 rounded-2xl border border-ink-800 shadow-studio overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-ink-950/80 border-b border-ink-800 text-ink-400 font-mono text-[11px] uppercase tracking-wider">
            <tr>
              <th className="py-3.5 px-5">Timestamp & User</th>
              <th className="py-3.5 px-4">Query Verified</th>
              <th className="py-3.5 px-4">Target Document</th>
              <th className="py-3.5 px-4">Clause Citation</th>
              <th className="py-3.5 px-4">Latency</th>
              <th className="py-3.5 px-5 text-right">Match Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-800 text-ink-200 font-sans">
            {auditLogs.map((log) => (
              <tr key={log.id} className="hover:bg-ink-850/60 transition-colors">
                <td className="py-4 px-5">
                  <div className="font-bold text-white">{log.user}</div>
                  <div className="text-[11px] text-ink-500 font-mono mt-0.5">{log.timestamp}</div>
                </td>

                <td className="py-4 px-4 font-medium text-ink-200 max-w-xs">
                  &ldquo;{log.query}&rdquo;
                </td>

                <td className="py-4 px-4 text-ink-400">
                  {log.document}
                </td>

                <td className="py-4 px-4 font-mono text-cyanAccent-400 font-semibold">
                  {log.citation}
                </td>

                <td className="py-4 px-4 font-mono text-ink-500">
                  {log.latency}
                </td>

                <td className="py-4 px-5 text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{log.confidence}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
