"use client";

import React, { useEffect, useRef, useState } from "react";
import { Citation, KnowledgeDocument } from "@/types";
import {
  FileText,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ChevronDown,
  Layers,
  BarChart3,
  Shield,
  FileCode,
  Upload,
  Check,
  ExternalLink,
  BookOpen,
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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
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

      // Smooth scroll to highlighted chunk after page transition
      setTimeout(() => {
        const el = paragraphRefs.current[activeCitation.chunkId];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 120);

      // Auto-dim the intense glow after 4 seconds
      const timer = setTimeout(() => {
        setHighlightedChunkId(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [activeCitation, activeDocument.id]);

  const activePageData =
    activeDocument.pages.find((p) => p.pageNumber === currentPage) ||
    activeDocument.pages[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Enterprise SLA":
        return <Layers className="w-4 h-4 text-brand-400" />;
      case "Financial & Metrics":
        return <BarChart3 className="w-4 h-4 text-emerald-400" />;
      case "Security & Compliance":
        return <Shield className="w-4 h-4 text-amber-400" />;
      default:
        return <FileCode className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#080B11] border-r border-[#1E293B]/80 select-text">
      {/* Sleek Top Document Header & Selector */}
      <div className="px-4 py-3 border-b border-[#1E293B] bg-[#0C121D]/90 backdrop-blur-md relative z-20">
        <div className="flex items-center justify-between gap-3">
          {/* Document Selector Dropdown Trigger */}
          <div className="relative flex-1 min-w-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl bg-[#151F32]/80 hover:bg-[#1E293B] border border-[#1E293B] hover:border-brand-500/40 transition-all text-left group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-lg bg-[#0C121D] border border-[#1E293B] shrink-0 group-hover:border-brand-500/40">
                  {getCategoryIcon(activeDocument.category)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white truncate">
                      {activeDocument.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                    <span className="text-brand-300">{activeDocument.category}</span>
                    <span>•</span>
                    <span>{activeDocument.pageCount} Pages</span>
                    <span>•</span>
                    <span>{activeDocument.fileSize}</span>
                  </div>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${isDropdownOpen ? "rotate-180 text-brand-400" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute left-0 top-full mt-2 w-full min-w-[320px] max-w-md bg-[#0C121D] border border-[#1E293B] rounded-2xl shadow-2xl z-40 p-2 space-y-1.5 animate-fade-in backdrop-blur-xl">
                  <div className="px-3 py-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider border-b border-[#1E293B]">
                    Select Verified Knowledge Source
                  </div>

                  <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
                    {documents.map((doc) => {
                      const isSelected = doc.id === activeDocument.id;
                      return (
                        <button
                          key={doc.id}
                          onClick={() => {
                            onSelectDocument(doc);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-start gap-2.5 p-2.5 rounded-xl text-left transition-all ${
                            isSelected
                              ? "bg-brand-600/20 border border-brand-500/40 text-white"
                              : "hover:bg-[#151F32] border border-transparent text-slate-300"
                          }`}
                        >
                          <div className="mt-0.5">{getCategoryIcon(doc.category)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold truncate">{doc.title}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-brand-400 shrink-0 ml-1" />}
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                              {doc.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-[#1E293B]">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onOpenUpload();
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-brand-300 hover:text-white bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Custom Document (PDF / TXT)</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Quick Upload Button */}
          <button
            onClick={onOpenUpload}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#151F32] hover:bg-[#1E293B] border border-[#1E293B] rounded-xl transition-colors shrink-0"
            title="Upload new document into vector workspace"
          >
            <Upload className="w-3.5 h-3.5 text-brand-400" />
            <span className="hidden sm:inline">Upload</span>
          </button>
        </div>
      </div>

      {/* Reader Controls Toolbar */}
      <div className="px-4 py-2 border-b border-[#1E293B] bg-[#0A0E17] flex items-center justify-between gap-3 text-xs">
        {/* Page Switcher */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage <= 1}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#151F32] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1">
            {activeDocument.pages.map((p) => (
              <button
                key={p.pageNumber}
                onClick={() => setCurrentPage(p.pageNumber)}
                className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-all ${
                  currentPage === p.pageNumber
                    ? "bg-brand-600 text-white font-bold shadow-sm shadow-brand-500/30"
                    : "text-slate-400 hover:text-white hover:bg-[#151F32]"
                }`}
              >
                Page {p.pageNumber}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(activeDocument.pageCount, p + 1))
            }
            disabled={currentPage >= activeDocument.pageCount}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#151F32] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter / Search within page */}
        <div className="relative flex-1 max-w-[200px]">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search clause..."
            className="w-full pl-8 pr-2.5 py-1 rounded-lg text-xs bg-[#151F32]/80 border border-[#1E293B] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
      </div>

      {/* Main Document Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-xs sm:text-sm">
        {/* Page Section Banner */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-500/10 text-brand-300 border border-brand-500/25">
              PAGE {activePageData.pageNumber} OF {activeDocument.pageCount}
            </span>
            <h3 className="text-xs font-semibold text-slate-300 truncate">
              {activePageData.title || activeDocument.title}
            </h3>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            {activePageData.chunks.length} vectorized chunks
          </span>
        </div>

        {/* Paragraph Blocks */}
        <div className="space-y-4">
          {activePageData.chunks.map((chunk) => {
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
                className={`p-5 rounded-2xl border transition-all duration-500 relative ${
                  isHighlighted
                    ? "bg-brand-500/20 border-brand-400 ring-2 ring-brand-400/50 shadow-xl shadow-brand-500/20 scale-[1.01]"
                    : matchesSearch
                    ? "bg-amber-500/10 border-amber-500/40"
                    : "bg-[#0C121D]/80 border-[#1E293B] hover:border-slate-700"
                }`}
              >
                {/* Paragraph Meta Bar */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-medium text-slate-400 bg-[#151F32] px-2 py-0.5 rounded-md border border-[#1E293B]">
                      ¶ Clause {chunk.paragraphIndex}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      ~{chunk.tokenCount} tokens
                    </span>
                  </div>

                  {isHighlighted && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-accent-cyan bg-accent-cyan/15 px-2.5 py-0.5 rounded-full border border-accent-cyan/30 animate-pulse">
                      <Sparkles className="w-3 h-3 text-accent-cyan" />
                      ACTIVE CITATION SOURCE
                    </span>
                  )}
                </div>

                {/* Paragraph Text */}
                <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">
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
