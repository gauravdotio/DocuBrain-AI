"use client";

import React, { useState, useEffect } from "react";
import { X, Key, Database, Shield, Check, ExternalLink } from "lucide-react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  customApiKey: string;
  onSaveApiKey: (key: string) => void;
  demoMode: boolean;
  onToggleDemoMode: (val: boolean) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  customApiKey,
  onSaveApiKey,
  demoMode,
  onToggleDemoMode,
}) => {
  const [apiKeyInput, setApiKeyInput] = useState(customApiKey);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setApiKeyInput(customApiKey);
  }, [customApiKey]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveApiKey(apiKeyInput.trim());
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-surface-card border border-surface-border rounded-2xl shadow-2xl p-6 text-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-border">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-500/15 text-brand-400 border border-brand-500/30">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Engine Configuration</h3>
              <p className="text-xs text-slate-400">Manage Gemini API & Redis Credentials</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSave} className="py-4 space-y-4">
          {/* Operating Mode Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Operational Mode</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onToggleDemoMode(true)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  demoMode
                    ? "bg-brand-500/15 border-brand-500 text-white"
                    : "bg-surface-hover border-surface-border text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="text-xs font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-400" />
                  <span>Demo Mode</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Zero setup, offline neural simulation
                </div>
              </button>

              <button
                type="button"
                onClick={() => onToggleDemoMode(false)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  !demoMode
                    ? "bg-emerald-500/15 border-emerald-500 text-white"
                    : "bg-surface-hover border-surface-border text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="text-xs font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Live Gemini</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Direct Google Gemini 1.5 Flash stream
                </div>
              </button>
            </div>
          </div>

          {/* Google Gemini API Key Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                Google Gemini API Key
              </label>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-brand-400 hover:underline flex items-center gap-1"
              >
                <span>Get Free Key</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-hover border border-surface-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors font-mono"
            />
            <p className="text-[11px] text-slate-500">
              Keys are stored securely in browser local storage and never logged.
            </p>
          </div>

          {/* Upstash Redis Notice */}
          <div className="p-3 rounded-xl bg-surface-hover/50 border border-surface-border text-xs text-slate-400 space-y-1">
            <div className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-brand-400" />
              <span>Upstash Redis Rate Limiting</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Configured via <code className="text-brand-300 font-mono">UPSTASH_REDIS_REST_URL</code> and <code className="text-brand-300 font-mono">UPSTASH_REDIS_REST_TOKEN</code> in your environment file. When absent, an ultra-fast in-memory sliding window rate limiter runs automatically.
            </p>
          </div>

          {/* Save Button */}
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
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-brand-600/20"
            >
              {isSaved ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Settings</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
