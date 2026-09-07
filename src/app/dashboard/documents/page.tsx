"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SAMPLE_DOCUMENTS } from "@/lib/sample-docs";
import {
  FileText,
  Search,
  Upload,
  CheckCircle2,
  Layers,
  BarChart3,
  Shield,
  ArrowRight,
  ExternalLink,
  Plus,
} from "lucide-react";

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredDocs = SAMPLE_DOCUMENTS.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || doc.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 sm:p-8 space-y-6 h-full overflow-y-auto bg-ink-950 text-ink-100">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            Enterprise Documents Repository
          </h1>
          <p className="text-xs text-ink-400 mt-0.5">
            Indexed corporate knowledge sources with semantic sliding-window chunks.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amberAccent-400 to-amberAccent-500 hover:brightness-110 text-ink-950 rounded-xl text-xs font-bold transition-all shadow-glowAmber"
        >
          <Plus className="w-4 h-4" />
          <span>Upload & Vectorize</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-ink-900 p-3 rounded-2xl border border-ink-800 shadow-studio">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {["All", "Enterprise SLA", "Financial & Metrics", "Security & Compliance"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                filter === cat
                  ? "bg-amberAccent-500 text-ink-950 font-bold shadow-glowAmber"
                  : "text-ink-400 hover:text-white hover:bg-ink-850"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-ink-850 border border-ink-700 rounded-lg text-white placeholder:text-ink-500 focus:outline-none focus:border-amberAccent-500"
          />
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-ink-900 rounded-2xl border border-ink-800 shadow-studio overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-ink-950/80 border-b border-ink-800 text-ink-400 font-mono text-[11px] uppercase tracking-wider">
            <tr>
              <th className="py-3.5 px-5">Document Name</th>
              <th className="py-3.5 px-4">Category</th>
              <th className="py-3.5 px-4">Pages & Chunks</th>
              <th className="py-3.5 px-4">Vector Status</th>
              <th className="py-3.5 px-4">Updated</th>
              <th className="py-3.5 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-800 text-ink-200 font-sans">
            {filteredDocs.map((doc) => {
              const totalChunks = doc.pages.reduce((acc, p) => acc + p.chunks.length, 0);

              return (
                <tr key={doc.id} className="hover:bg-ink-850/60 transition-colors group">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-ink-850 text-amberAccent-400 flex items-center justify-center shrink-0 border border-ink-700">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white group-hover:text-amberAccent-400 transition-colors">
                          {doc.title}
                        </div>
                        <div className="text-[11px] text-ink-400 font-mono mt-0.5">
                          {doc.fileSize} • PDF/Markdown
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-ink-850 text-ink-300 border border-ink-700">
                      {doc.category}
                    </span>
                  </td>

                  <td className="py-4 px-4 font-mono text-ink-300">
                    <div>{doc.pageCount} Pages</div>
                    <div className="text-[10px] text-amberAccent-400 font-semibold">{totalChunks} Chunks</div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Indexed</span>
                    </span>
                  </td>

                  <td className="py-4 px-4 text-ink-400 font-mono text-[11px]">
                    {doc.updatedAt}
                  </td>

                  <td className="py-4 px-5 text-right">
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-amberAccent-400 hover:text-ink-950 hover:bg-amberAccent-400 border border-amberAccent-500/40 transition-all"
                    >
                      <span>Query in RAG</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
