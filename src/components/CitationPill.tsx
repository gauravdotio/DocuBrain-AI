"use client";

import React, { useState } from "react";
import { Citation } from "@/types";
import { BookOpen, ExternalLink } from "lucide-react";

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

  return (
    <span className="relative inline-block my-0.5 mx-1 align-middle">
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-500/15 border border-brand-500/30 text-brand-300 hover:bg-brand-500/25 hover:border-brand-400 hover:text-white transition-all shadow-sm group"
        title="Click to view and highlight source passage"
      >
        <BookOpen className="w-3 h-3 text-brand-400 group-hover:scale-110 transition-transform" />
        <span>
          Doc {citation.documentId === "doc-sla-2026" ? "1" : citation.documentId === "doc-fintech-2026" ? "2" : "3"}, p.{citation.pageNumber}
        </span>
        <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
      </button>

      {/* Floating Excerpt Tooltip */}
      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-surface-card border border-surface-border rounded-xl shadow-2xl text-left pointer-events-none animate-fade-in backdrop-blur-md">
          <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-surface-border text-[11px] text-slate-400 font-mono">
            <span className="font-semibold text-brand-400 truncate max-w-[170px]">
              Page {citation.pageNumber} • Paragraph {citation.paragraphIndex}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans font-medium">
              {Math.round(citation.relevanceScore * 100)}% match
            </span>
          </div>
          <p className="text-xs text-slate-300 line-clamp-3 italic leading-relaxed">
            &ldquo;{citation.exactExcerpt}&rdquo;
          </p>
          <div className="mt-1.5 text-[10px] text-brand-400/80 font-medium">
            Click pill to jump and highlight passage
          </div>
        </div>
      )}
    </span>
  );
};
