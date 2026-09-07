import { RateLimitStatus } from "@/types";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Global in-memory storage for development and zero-config demo mode
const memoryStore = new Map<string, { count: number; resetTime: number }>();

const DAILY_LIMIT = 10;
const WINDOW_SECONDS = 24 * 60 * 60; // 24 Hours

let upstashRatelimit: Ratelimit | null = null;

function getUpstashLimiter() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token && !upstashRatelimit) {
    try {
      const redis = new Redis({
        url,
        token,
      });

      upstashRatelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(DAILY_LIMIT, "24 h"),
        analytics: true,
        prefix: "@docubrain/ratelimit",
      });
    } catch (e) {
      console.warn("Failed to initialize Upstash Redis, falling back to in-memory:", e);
      upstashRatelimit = null;
    }
  }

  return upstashRatelimit;
}

export async function checkRateLimit(
  identifier: string,
  decrement: boolean = true
): Promise<RateLimitStatus> {
  const limiter = getUpstashLimiter();

  if (limiter) {
    try {
      if (decrement) {
        const { success, limit, remaining, reset } = await limiter.limit(identifier);
        const resetSeconds = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
        return {
          limit,
          remaining,
          resetSeconds,
          isRateLimited: !success,
          provider: "Upstash Redis",
        };
      } else {
        // Peek remaining
        const { remaining, reset } = await limiter.getRemaining(identifier);
        const resetSeconds = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
        return {
          limit: DAILY_LIMIT,
          remaining: Math.max(0, remaining),
          resetSeconds,
          isRateLimited: remaining <= 0,
          provider: "Upstash Redis",
        };
      }
    } catch (err) {
      console.error("Upstash Redis error, falling back to memoryStore:", err);
    }
  }

  // In-Memory Sliding Window Fallback
  const now = Date.now();
  let entry = memoryStore.get(identifier);

  if (!entry || now > entry.resetTime) {
    entry = {
      count: 0,
      resetTime: now + WINDOW_SECONDS * 1000,
    };
    memoryStore.set(identifier, entry);
  }

  if (decrement) {
    entry.count += 1;
  }

  const remaining = Math.max(0, DAILY_LIMIT - entry.count);
  const resetSeconds = Math.max(0, Math.ceil((entry.resetTime - now) / 1000));
  const isRateLimited = entry.count > DAILY_LIMIT;

  return {
    limit: DAILY_LIMIT,
    remaining,
    resetSeconds,
    isRateLimited,
    provider: "In-Memory Sliding Window",
  };
}

export function resetLocalRateLimit(identifier: string) {
  memoryStore.delete(identifier);
}
