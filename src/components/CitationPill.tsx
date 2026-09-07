"use client";

import React, { useState } from "react";
import { Citation } from "@/types";
import { BookOpen, ExternalLink, Sparkles } from "lucide-react";

interface CitationPillProps {
  citation: Citation;
  onSelect?: (citation: Citation) => void;
}

export const CitationPill: React.FC<CitationPillProps> = ({ citation, onSelect }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(citation);
    }
  };

  const docLabel =
    citation.documentId === "doc-sla-2026"
      ? "SLA Contract"
      : citation.documentId === "doc-fintech-2026"
      ? "FY2026 Report"
      : "SOC 2 Standard";

  return (
    <span className="relative inline-block my-0.5 mx-1 align-middle">
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-brand-500/15 border border-brand-500/30 text-brand-300 hover:bg-brand-500/30 hover:border-brand-400 hover:text-white transition-all shadow-sm group"
        title="Click to inspect and highlight clause in document viewer"
      >
        <BookOpen className="w-3 h-3 text-accent-cyan group-hover:scale-110 transition-transform" />
        <span>
          {docLabel} • p.{citation.pageNumber}
        </span>
        <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 text-brand-400" />
      </button>

      {/* Floating Excerpt Tooltip */}
      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-76 p-3.5 bg-[#0C121D] border border-[#1E293B] rounded-xl shadow-2xl text-left pointer-events-none animate-fade-in backdrop-blur-xl">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#1E293B] text-[11px] font-mono">
            <span className="font-semibold text-brand-300 truncate">
              Clause ¶ {citation.paragraphIndex} • Page {citation.pageNumber}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[10px]">
              {Math.round(citation.relevanceScore * 100)}% match
            </span>
          </div>
          <p className="text-xs text-slate-300 line-clamp-3 italic leading-relaxed font-sans">
            &ldquo;{citation.exactExcerpt}&rdquo;
          </p>
          <div className="mt-2 flex items-center gap-1 text-[10px] text-accent-cyan font-mono">
            <Sparkles className="w-3 h-3" />
            <span>Click pill to jump & highlight clause</span>
          </div>
        </div>
      )}
    </span>
  );
};
