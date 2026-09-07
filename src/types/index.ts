export interface DocumentChunk {
  id: string;
  documentId: string;
  pageNumber: number;
  paragraphIndex: number;
  text: string;
  tokenCount: number;
}

export interface DocumentPage {
  pageNumber: number;
  title?: string;
  text: string;
  chunks: DocumentChunk[];
}

export interface KnowledgeDocument {
  id: string;
  title: string;
  category: 'Enterprise SLA' | 'Financial & Metrics' | 'Security & Compliance' | 'Custom Upload';
  description: string;
  fileSize: string;
  pageCount: number;
  updatedAt: string;
  pages: DocumentPage[];
}

export interface Citation {
  id: string;
  chunkId: string;
  documentId: string;
  documentTitle: string;
  pageNumber: number;
  paragraphIndex: number;
  exactExcerpt: string;
  relevanceScore: number;
}

export interface QueryTelemetry {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  latencyMs: number;
  costDollars: number;
  engine: 'Google Gemini 1.5 Flash' | 'Simulated Neural Engine (Demo)';
  cacheHit?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  citations?: Citation[];
  telemetry?: QueryTelemetry;
  isStreaming?: boolean;
}

export interface RateLimitStatus {
  limit: number;
  remaining: number;
  resetSeconds: number;
  isRateLimited: boolean;
  provider: 'Upstash Redis' | 'In-Memory Sliding Window';
}

export interface EngineConfig {
  hasGeminiKey: boolean;
  hasUpstash: boolean;
  isDemoMode: boolean;
}
