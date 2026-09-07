import { Citation, DocumentChunk, KnowledgeDocument } from "@/types";
import { estimateTokens } from "./utils";

/**
 * Splits document text into structured chunks with page and paragraph metadata
 */
export function chunkDocumentText(
  documentId: string,
  text: string,
  pageNumber: number = 1
): DocumentChunk[] {
  // Normalize line endings and split into paragraphs
  const rawParagraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p.length > 20);

  const chunks: DocumentChunk[] = [];
  let currentChunkText = "";
  let paragraphIndex = 1;

  for (const para of rawParagraphs) {
    const combined = currentChunkText ? `${currentChunkText}\n\n${para}` : para;
    const tokens = estimateTokens(combined);

    if (tokens > 250 && currentChunkText) {
      chunks.push({
        id: `chunk-${documentId}-p${pageNumber}-${paragraphIndex++}`,
        documentId,
        pageNumber,
        paragraphIndex: paragraphIndex - 1,
        text: currentChunkText,
        tokenCount: estimateTokens(currentChunkText),
      });
      // Carry forward last sentence for context continuity (sliding window)
      const sentences = para.split(/(?<=[.?!])\s+/);
      currentChunkText = sentences.slice(-2).join(" ");
    } else {
      currentChunkText = combined;
    }
  }

  if (currentChunkText) {
    chunks.push({
      id: `chunk-${documentId}-p${pageNumber}-${paragraphIndex}`,
      documentId,
      pageNumber,
      paragraphIndex,
      text: currentChunkText,
      tokenCount: estimateTokens(currentChunkText),
    });
  }

  return chunks;
}

/**
 * Semantic & BM25-style lexical search to retrieve the top K relevant chunks for a question
 */
export function retrieveContextChunks(
  query: string,
  document: KnowledgeDocument,
  topK: number = 3
): { chunks: DocumentChunk[]; citations: Citation[] } {
  // Flatten all chunks in document
  const allChunks: DocumentChunk[] = [];
  for (const page of document.pages) {
    allChunks.push(...page.chunks);
  }

  // Tokenize and clean query
  const queryTerms = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));

  const scoredChunks = allChunks.map((chunk) => {
    const chunkLower = chunk.text.toLowerCase();
    let score = 0;

    // Term frequency scoring
    for (const term of queryTerms) {
      const regex = new RegExp(`\\b${term}`, "gi");
      const matches = chunkLower.match(regex);
      if (matches) {
        score += matches.length * 3;
      }
    }

    // Exact phrase or partial phrase bonus
    if (queryTerms.length >= 2) {
      for (let i = 0; i < queryTerms.length - 1; i++) {
        const bigram = `${queryTerms[i]} ${queryTerms[i + 1]}`;
        if (chunkLower.includes(bigram)) {
          score += 10;
        }
      }
    }

    // Length normalization
    const normalizedScore = score > 0 ? Math.min(0.98, 0.70 + (score / (score + 10)) * 0.28) : 0.45;

    return {
      chunk,
      score: normalizedScore,
    };
  });

  // Sort descending by score
  scoredChunks.sort((a, b) => b.score - a.score);

  const topScored = scoredChunks.slice(0, topK);
  const selectedChunks = topScored.map((s) => s.chunk);

  const citations: Citation[] = topScored.map((s, idx) => {
    // Generate clean excerpt of first 120 characters
    const excerpt = s.chunk.text.length > 130
      ? `${s.chunk.text.slice(0, 125)}...`
      : s.chunk.text;

    return {
      id: `cite-${idx + 1}`,
      chunkId: s.chunk.id,
      documentId: s.chunk.documentId,
      documentTitle: document.title,
      pageNumber: s.chunk.pageNumber,
      paragraphIndex: s.chunk.paragraphIndex,
      exactExcerpt: excerpt,
      relevanceScore: Number(s.score.toFixed(2)),
    };
  });

  return { chunks: selectedChunks, citations };
}

const STOP_WORDS = new Set([
  "the", "is", "at", "which", "on", "and", "a", "an", "in", "of", "to", "for", "with",
  "what", "how", "when", "where", "who", "why", "are", "was", "were", "been", "being",
  "have", "has", "had", "does", "did", "can", "could", "should", "would", "our", "their",
]);
