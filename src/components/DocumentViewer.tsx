"use client";

import React, { useEffect, useRef, useState } from "react";
import { Citation, KnowledgeDocument } from "@/types";
import {
  FileText,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  ExternalLink,
  Shield,
  BarChart3,
  FileCode,
  Upload,
} from "lucide-react";

interface DocumentViewerProps {
  documents: KnowledgeDocument[];
  activeDocument: KnowledgeDocument;
  onSelectDocument: (doc: KnowledgeDocument) => void;
  activeCitation: Citation | null;
  onOpenUpload: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  documents,
  activeDocument,
  onSelectDocument,
  activeCitation,
  onOpenUpload,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [highlightedChunkId, setHighlightedChunkId] = useState<string | null>(null);
  const paragraphRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // When active document changes, reset page to 1
  useEffect(() => {
    setCurrentPage(1);
    setSearchQuery("");
  }, [activeDocument.id]);

  // When a citation is clicked in the chat engine, jump to its page and scroll to the passage
  useEffect(() => {
    if (activeCitation && activeCitation.documentId === activeDocument.id) {
      setCurrentPage(activeCitation.pageNumber);
      setHighlightedChunkId(activeCitation.chunkId);

      // Smooth scroll to highlighted chunk after page change
      setTimeout(() => {
        const el = paragraphRefs.current[activeCitation.chunkId];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 120);

      // Auto-dim the intense glow after 3.5 seconds
      const timer = setTimeout(() => {
        setHighlightedChunkId(null);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [activeCitation, activeDocument.id]);

  const activePageData =
    activeDocument.pages.find((p) => p.pageNumber === currentPage) ||
    activeDocument.pages[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Enterprise SLA":
        return <Layers className="w-3.5 h-3.5 text-brand-400" />;
      case "Financial & Metrics":
        return <BarChart3 className="w-3.5 h-3.5 text-accent-emerald" />;
      case "Security & Compliance":
        return <Shield className="w-3.5 h-3.5 text-accent-amber" />;
      default:
        return <FileCode className="w-3.5 h-3.5 text-accent-cyan" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-surface border-r border-surface-border">
      {/* Top Document Selector Bar */}
      <div className="p-4 border-b border-surface-border bg-surface-card/60 backdrop-blur-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Knowledge Source
              </h2>
            </div>
          </div>

          <button
            onClick={onOpenUpload}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-brand-300 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 rounded-lg transition-all"
          >
            <Upload className="w-3 h-3" />
            <span>Upload PDF</span>
          </button>
        </div>

        {/* Document Switcher Tabs */}
        <div className="grid grid-cols-1 gap-1.5">
          {documents.map((doc) => {
            const isSelected = doc.id === activeDocument.id;
            return (
              <button
                key={doc.id}
                onClick={() => onSelectDocument(doc)}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-brand-600/15 border-brand-500/40 shadow-sm"
                    : "bg-surface-hover/30 border-surface-border hover:bg-surface-hover/70 hover:border-slate-700"
                }`}
              >
                <div className="mt-0.5">{getCategoryIcon(doc.category)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-medium truncate ${
                        isSelected ? "text-white font-semibold" : "text-slate-300"
                      }`}
                    >
                      {doc.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">
                      {doc.fileSize}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {doc.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Document Reader Controls */}
      <div className="px-4 py-2.5 border-b border-surface-border bg-surface-card/40 flex items-center justify-between gap-3">
        {/* Page Switcher */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage <= 1}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-surface-hover disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1">
            {activeDocument.pages.map((p) => (
              <button
                key={p.pageNumber}
                onClick={() => setCurrentPage(p.pageNumber)}
                className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                  currentPage === p.pageNumber
                    ? "bg-brand-600 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-surface-hover"
                }`}
              >
                p.{p.pageNumber}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(activeDocument.pageCount, p + 1))
            }
            disabled={currentPage >= activeDocument.pageCount}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-surface-hover disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Page Search */}
        <div className="relative flex-1 max-w-[190px]">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search page..."
            className="w-full pl-8 pr-2.5 py-1 rounded-lg text-xs bg-surface-hover/80 border border-surface-border text-slate-200 placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
      </div>

      {/* Main Document Content Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 text-slate-200 leading-relaxed font-sans text-xs sm:text-sm">
        {/* Page Title */}
        <div className="flex items-center justify-between pb-3 border-b border-surface-border">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-hover text-brand-400 border border-surface-border">
              PAGE {activePageData.pageNumber} OF {activeDocument.pageCount}
            </span>
            <span className="text-xs text-slate-400 font-medium truncate">
              {activePageData.title || activeDocument.title}
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            {activePageData.chunks.length} vectorized chunks
          </span>
        </div>

        {/* Chunked Paragraphs */}
        <div className="space-y-3.5">
          {activePageData.chunks.map((chunk, idx) => {
            const isHighlighted = highlightedChunkId === chunk.id;
            const matchesSearch =
              searchQuery.trim() !== "" &&
              chunk.text.toLowerCase().includes(searchQuery.toLowerCase());

            return (
              <div
                key={chunk.id}
                ref={(el) => {
                  paragraphRefs.current[chunk.id] = el;
                }}
                className={`p-4 rounded-xl border transition-all duration-500 relative group ${
                  isHighlighted
                    ? "bg-brand-500/20 border-brand-400 ring-2 ring-brand-400/50 shadow-lg shadow-brand-500/20 scale-[1.01]"
                    : matchesSearch
                    ? "bg-amber-500/10 border-amber-500/40"
                    : "bg-surface-card/60 border-surface-border/80 hover:border-slate-700"
                }`}
              >
                {/* Chunk Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-surface-hover px-1.5 py-0.5 rounded border border-surface-border">
                      ¶ {chunk.paragraphIndex}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      ~{chunk.tokenCount} tokens
                    </span>
                  </div>

                  {isHighlighted && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-brand-300 bg-brand-500/20 px-2 py-0.5 rounded-full border border-brand-400/40 animate-pulse">
                      <Sparkles className="w-3 h-3 text-brand-400" />
                      Active Citation Target
                    </span>
                  )}
                </div>

                {/* Paragraph Text */}
                <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {chunk.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
