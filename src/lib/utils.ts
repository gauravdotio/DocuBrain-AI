import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function estimateTokens(text: string): number {
  if (!text) return 0;
  // Standard approximation: ~4 characters per token for English technical text
  return Math.max(1, Math.ceil(text.length / 3.8));
}

export function calculateCost(promptTokens: number, completionTokens: number): number {
  // Gemini 1.5 Flash pricing: $0.075 / 1M input tokens, $0.30 / 1M output tokens
  const promptCost = (promptTokens / 1_000_000) * 0.075;
  const completionCost = (completionTokens / 1_000_000) * 0.30;
  return Number((promptCost + completionCost).toFixed(6));
}

export function formatSecondsRemaining(seconds: number): string {
  if (seconds <= 0) return "Ready";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${secs}s`;
  return `${secs}s`;
}
