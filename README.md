# DocuBrain AI — AI Knowledge Engine (RAG & Token Streaming)

An enterprise-grade B2B document intelligence SaaS platform engineered with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Google Gemini API**, and **Upstash Redis rate limiting**.

Users upload enterprise documents (contracts, security policies, SLAs) or explore preloaded corporate knowledge bases, querying the AI knowledge engine with **real-time word-by-word streaming markdown answers**, **interactive citation pills that highlight exact document passages**, and **token budgeting telemetry**.

---

## System Architecture

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                             DOCUBRAIN AI ARCHITECTURE                         │
└───────────────────────────────────────────────────────────────────────────────┘
                                       │
            ┌──────────────────────────┴──────────────────────────┐
            ▼                                                     ▼
┌───────────────────────┐                             ┌───────────────────────┐
│  DOCUMENT INGESTION   │                             │  RATE LIMIT & BUDGET  │
│  • Sliding window     │                             │  • Upstash Redis      │
│  • 350-token chunks   │                             │  • 10 queries/day     │
│  • Semantic overlap   │                             │  • In-Memory fallback │
└───────────┬───────────┘                             └───────────┬───────────┘
            │                                                     │
            └──────────────────────────┬──────────────────────────┘
                                       ▼
                  ┌─────────────────────────────────────────┐
                  │    SERVER-SENT EVENTS (SSE) STREAMING   │
                  │    • Google Gemini 1.5 Flash Vision     │
                  │    • Zero-latency simulated engine      │
                  │    • Live latency & token telemetry     │
                  └────────────────────┬────────────────────┘
                                       ▼
                  ┌─────────────────────────────────────────┐
                  │          SPLIT-PANE WORKSPACE UI        │
                  │  Left: Synchronized passage highlighter │
                  │  Right: Word-by-word streaming markdown │
                  └─────────────────────────────────────────┘
```

---

## Key Features

### 1. Word-by-Word Streaming Markdown UI
- Real-time Server-Sent Events (SSE) streaming pipeline (`/api/chat`).
- Blinking typewriter cursor with instant markdown rendering (headers, tables, code blocks, lists).
- Zero lag, optimized client bundle with smooth auto-scroll.

### 2. Interactive Document Citation Pills
- Every AI response embeds verifiable citations: `[Doc 1, p. 2]`.
- Hovering shows an instant excerpt popover with match confidence percentage.
- **Synchronized Passage Highlighter**: Clicking any citation pill immediately navigates to that page in the document viewer, scrolls the exact paragraph into view, and illuminates it with a glowing purple highlight.

### 3. Upstash Redis Rate Limiting & Token Budgeting
- Restricts users to **10 free queries/day** using a 24-hour sliding-window algorithm.
- Displays a visual quota meter in the navbar with real-time countdown to window reset.
- Gracefully handles HTTP 429 Too Many Requests with informative quota alerts and a 1-click **Reset Demo** option for evaluation.
- Dual provider architecture: automatically connects to **Upstash Redis** when configured, or uses an ultra-fast **in-memory sliding window** fallback.

### 4. Real-Time Telemetry Console
- Inspects every query in real time:
  - **Prompt & Completion Tokens**: Detailed token breakdown.
  - **Latency**: Round-trip time in milliseconds.
  - **Cost Calculator**: Real-time dollar estimate based on Gemini 1.5 Flash token pricing.
  - **Engine Status**: Live Google Gemini vs. Zero-Latency Demo Engine.

### 5. Preloaded Enterprise Knowledge Bases
Instant zero-friction evaluation with 3 corporate documents:
1. **CloudMesh Infrastructure SLA & Security Policy 2026** (99.99% availability, disaster recovery RTO/RPO, financial credits).
2. **FinPulse SaaS Financial & Revenue Operations Report (FY2026)** (ARR growth, NRR, CAC/LTV unit economics, logo churn).
3. **NexusGuard SOC 2 Type II Audit & Incident Response Playbook** (Trust Services Criteria, Okta MFA, P1-P4 triage severity matrix, 72-hr GDPR notification).

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, Route Handlers)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **AI Engine**: Google Generative AI SDK (`@google/generative-ai`), Gemini 1.5 Flash
- **Rate Limiting**: `@upstash/ratelimit`, `@upstash/redis`
- **Markdown**: `react-markdown`, `remark-gfm`
- **Effects**: `canvas-confetti`

---

## Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/gauravdotio/DocuBrain-AI.git
cd DocuBrain-AI
npm install
```

### 2. Environment Setup (Optional)
Copy the example environment file:
```bash
cp .env.example .env.local
```

Set your credentials (optional for zero-setup demo mode):
```ini
# Google Gemini API Key (https://aistudio.google.com/)
GEMINI_API_KEY=your_gemini_api_key_here

# Upstash Redis (https://console.upstash.com/)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Type Check
```bash
npm run build
```

---

## License
MIT License © 2026 Gaurav Rawat.
