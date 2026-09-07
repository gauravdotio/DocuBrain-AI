import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocuBrain AI — AI Knowledge Engine (RAG & Token Streaming)",
  description:
    "Enterprise AI document intelligence SaaS with semantic RAG, word-by-word streaming markdown, Upstash Redis rate limiting, and interactive passage citations.",
  keywords: [
    "DocuBrain AI",
    "RAG",
    "Retrieval-Augmented Generation",
    "Google Gemini API",
    "Upstash Redis",
    "Token Streaming",
    "Next.js 14",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-slate-100 antialiased selection:bg-brand-500/30 selection:text-brand-200">
        {children}
      </body>
    </html>
  );
}
