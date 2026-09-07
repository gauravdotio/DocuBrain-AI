"use client";

import React, { useState } from "react";
import { KnowledgeDocument } from "@/types";
import { chunkDocumentText } from "@/lib/rag";
import { X, UploadCloud, FileText, Check, AlertCircle } from "lucide-react";
import { estimateTokens } from "@/lib/utils";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDocument: (doc: KnowledgeDocument) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onAddDocument,
}) => {
  const [title, setTitle] = useState("");
  const [rawText, setRawText] = useState("");
  const [category, setCategory] = useState<
    "Enterprise SLA" | "Financial & Metrics" | "Security & Compliance" | "Custom Upload"
  >("Custom Upload");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setTitle(file.name.replace(/\.[^/.]+$/, ""));

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setRawText(content);
    };
    reader.onerror = () => {
      setError("Failed to read file.");
    };
    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !rawText.trim()) {
      setError("Please provide both a document title and text content.");
      return;
    }

    const docId = `custom-doc-${Date.now()}`;
    const chunks = chunkDocumentText(docId, rawText, 1);

    const newDoc: KnowledgeDocument = {
      id: docId,
      title: title.trim(),
      category,
      description: "User uploaded custom document indexed into vector knowledge engine.",
      fileSize: `${(new Blob([rawText]).size / 1024).toFixed(1)} KB`,
      pageCount: 1,
      updatedAt: "Just now",
      pages: [
        {
          pageNumber: 1,
          title: title.trim(),
          text: rawText,
          chunks,
        },
      ],
    };

    onAddDocument(newDoc);
    onClose();
    setTitle("");
    setRawText("");
    setError(null);
  };

  const estimatedTokens = estimateTokens(rawText);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-surface-card border border-surface-border rounded-2xl shadow-2xl p-6 text-slate-200">
        <div className="flex items-center justify-between pb-4 border-b border-surface-border">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-500/15 text-brand-400 border border-brand-500/30">
              <UploadCloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Upload Knowledge Document</h3>
              <p className="text-xs text-slate-400">Add documents for instant text chunking & RAG indexing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="py-4 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Document Title */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Document Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Enterprise Privacy Policy 2026"
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-hover border border-surface-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Category Tag</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-hover border border-surface-border text-xs text-white focus:outline-none focus:border-brand-500 transition-colors"
            >
              <option value="Enterprise SLA">Enterprise SLA</option>
              <option value="Financial & Metrics">Financial & Metrics</option>
              <option value="Security & Compliance">Security & Compliance</option>
              <option value="Custom Upload">Custom Upload</option>
            </select>
          </div>

          {/* File input or text paste */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">Document Content</label>
              <span className="text-[11px] font-mono text-slate-400">
                ~{estimatedTokens} tokens
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 p-3 border-2 border-dashed border-surface-border hover:border-brand-500 rounded-xl bg-surface-hover/50 hover:bg-surface-hover text-xs text-slate-300 transition-all">
                <FileText className="w-4 h-4 text-brand-400" />
                <span>Upload .txt or .md file</span>
                <input
                  type="file"
                  accept=".txt,.md,.json,.csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <textarea
              rows={6}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Or paste contract terms, architecture specs, or company policy here..."
              className="w-full p-3.5 rounded-xl bg-surface-hover border border-surface-border text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors leading-relaxed font-sans"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim() || !rawText.trim()}
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-brand-600/20"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Index into RAG</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
