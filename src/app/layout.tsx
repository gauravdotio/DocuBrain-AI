import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-ink-950 text-ink-100 font-sans antialiased selection:bg-cyanAccent-500 selection:text-ink-950">
        {children}
      </body>
    </html>
  );
}
