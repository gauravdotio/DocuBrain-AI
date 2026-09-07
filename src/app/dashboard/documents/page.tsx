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
    <div className="p-6 sm:p-8 space-y-6 h-full overflow-y-auto bg-slate-50">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Enterprise Documents Repository
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Indexed corporate knowledge sources with semantic sliding-window chunks.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Upload & Vectorize</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-card">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {["All", "Enterprise SLA", "Financial & Metrics", "Security & Compliance"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                filter === cat
                  ? "bg-brand-500 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase tracking-wider">
            <tr>
              <th className="py-3.5 px-5">Document Name</th>
              <th className="py-3.5 px-4">Category</th>
              <th className="py-3.5 px-4">Pages & Chunks</th>
              <th className="py-3.5 px-4">Vector Status</th>
              <th className="py-3.5 px-4">Updated</th>
              <th className="py-3.5 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-sans">
            {filteredDocs.map((doc) => {
              const totalChunks = doc.pages.reduce((acc, p) => acc + p.chunks.length, 0);

              return (
                <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors group">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          {doc.title}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {doc.fileSize} • PDF/Markdown
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {doc.category}
                    </span>
                  </td>

                  <td className="py-4 px-4 font-mono text-slate-600">
                    <div>{doc.pageCount} Pages</div>
                    <div className="text-[10px] text-brand-600 font-semibold">{totalChunks} Chunks</div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>100% Indexed</span>
                    </span>
                  </td>

                  <td className="py-4 px-4 text-slate-500 font-mono text-[11px]">
                    {doc.updatedAt}
                  </td>

                  <td className="py-4 px-5 text-right">
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-brand-600 hover:text-white hover:bg-brand-500 border border-brand-200 hover:border-brand-500 transition-all shadow-xs"
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
