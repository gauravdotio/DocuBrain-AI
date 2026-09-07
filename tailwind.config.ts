import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050811",
          900: "#090D16",
          850: "#0D1321",
          800: "#131C2E",
          700: "#1B273E",
          600: "#273856",
          500: "#475569",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
        },
        iris: {
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },
        amberAccent: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        mint: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        studio: "0 20px 45px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        glowIris: "0 0 30px -5px rgba(99, 102, 241, 0.3)",
        glowAmber: "0 0 25px -5px rgba(245, 158, 11, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        pulseGlow: "pulseGlow 2.5s infinite ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
