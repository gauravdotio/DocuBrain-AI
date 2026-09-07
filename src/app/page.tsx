"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Citation, KnowledgeDocument, QueryTelemetry, RateLimitStatus } from "@/types";
import { SAMPLE_DOCUMENTS } from "@/lib/sample-docs";
import { Navbar } from "@/components/Navbar";
import { DocumentViewer } from "@/components/DocumentViewer";
import { ChatEngine } from "@/components/ChatEngine";
import { TelemetryBar } from "@/components/TelemetryBar";
import { ApiKeyModal } from "@/components/ApiKeyModal";
import { UploadModal } from "@/components/UploadModal";

export default function Home() {
  const [documents, setDocuments] = useState<KnowledgeDocument[]>(SAMPLE_DOCUMENTS);
  const [activeDocument, setActiveDocument] = useState<KnowledgeDocument>(SAMPLE_DOCUMENTS[0]);
  const [activeCitation, setActiveCitation] = useState<Citation | null>(null);
  const [rateLimit, setRateLimit] = useState<RateLimitStatus | null>(null);
  const [telemetry, setTelemetry] = useState<QueryTelemetry | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  // Settings & Configuration
  const [demoMode, setDemoMode] = useState<boolean>(true);
  const [customApiKey, setCustomApiKey] = useState<string>("");
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);
  const [isResettingQuota, setIsResettingQuota] = useState<boolean>(false);

  // Load initial settings and rate limit
  useEffect(() => {
    // Check localStorage for saved key
    const savedKey = localStorage.getItem("docubrain_gemini_key");
    if (savedKey) {
      setCustomApiKey(savedKey);
      setDemoMode(false);
    }

    // Fetch initial rate limit status
    fetchRateLimit();
  }, []);

  const fetchRateLimit = async () => {
    try {
      const res = await fetch("/api/rate-limit");
      if (res.ok) {
        const data = await res.json();
        setRateLimit(data);
      }
    } catch (err) {
      console.error("Failed to fetch initial rate limit:", err);
    }
  };

  const handleResetQuota = async () => {
    setIsResettingQuota(true);
    try {
      const res = await fetch("/api/rate-limit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      if (res.ok) {
        const data = await res.json();
        setRateLimit(data);

        // Confetti burst for pleasant user feedback
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.1, x: 0.8 },
          colors: ["#6366F1", "#8B5CF6", "#10B981", "#38BDF8"],
        });
      }
    } catch (err) {
      console.error("Failed to reset quota:", err);
    } finally {
      setIsResettingQuota(false);
    }
  };

  const handleSaveApiKey = (key: string) => {
    setCustomApiKey(key);
    if (key) {
      localStorage.setItem("docubrain_gemini_key", key);
      setDemoMode(false);
    } else {
      localStorage.removeItem("docubrain_gemini_key");
      setDemoMode(true);
    }
  };

  const handleCitationClick = (citation: Citation) => {
    // If citation is for another document, switch to that document
    if (citation.documentId !== activeDocument.id) {
      const targetDoc = documents.find((d) => d.id === citation.documentId);
      if (targetDoc) {
        setActiveDocument(targetDoc);
      }
    }
    setActiveCitation(citation);
  };

  const handleAddDocument = (newDoc: KnowledgeDocument) => {
    setDocuments((prev) => [newDoc, ...prev]);
    setActiveDocument(newDoc);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.2, x: 0.3 },
      colors: ["#8B5CF6", "#10B981"],
    });
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Top Navigation */}
      <Navbar
        rateLimit={rateLimit}
        onResetQuota={handleResetQuota}
        onOpenSettings={() => setIsSettingsOpen(true)}
        demoMode={demoMode}
        onToggleDemoMode={() => setDemoMode(!demoMode)}
      />

      {/* Main Dual-Pane Workspace */}
      <main className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        {/* Left Pane: Knowledge Document & Passage Highlighter (45% width on desktop) */}
        <div className="h-1/2 lg:h-full lg:w-[45%] flex-shrink-0 border-b lg:border-b-0">
          <DocumentViewer
            documents={documents}
            activeDocument={activeDocument}
            onSelectDocument={(doc) => {
              setActiveDocument(doc);
              setActiveCitation(null);
            }}
            activeCitation={activeCitation}
            onOpenUpload={() => setIsUploadOpen(true)}
          />
        </div>

        {/* Right Pane: RAG Streaming Chat & Citations (55% width on desktop) */}
        <div className="h-1/2 lg:h-full lg:w-[55%] flex flex-col min-h-0">
          <div className="flex-1 min-h-0 overflow-hidden">
            <ChatEngine
              activeDocument={activeDocument}
              onCitationClick={handleCitationClick}
              rateLimit={rateLimit}
              onRateLimitUpdate={(status) => setRateLimit(status)}
              onResetQuota={handleResetQuota}
              onTelemetryUpdate={(tel) => setTelemetry(tel)}
              setIsStreamingParent={setIsStreaming}
              customApiKey={customApiKey}
              demoMode={demoMode}
            />
          </div>

          {/* Bottom Telemetry Bar */}
          <TelemetryBar telemetry={telemetry} isStreaming={isStreaming} />
        </div>
      </main>

      {/* Configuration & Upload Modals */}
      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        customApiKey={customApiKey}
        onSaveApiKey={handleSaveApiKey}
        demoMode={demoMode}
        onToggleDemoMode={(val) => setDemoMode(val)}
      />

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddDocument={handleAddDocument}
      />
    </div>
  );
}
