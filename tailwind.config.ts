import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0a0a0f",
          surface: "#0f0f1a",
          elevated: "#141425",
          card: "#16162a",
        },
        accent: {
          violet: "#7c3aed",
          purple: "#9333ea",
          cyan: "#06b6d4",
          glow: "#a855f7",
        },
        text: {
          primary: "#f0f0ff",
          secondary: "#8b8bab",
          muted: "#4a4a6a",
        },
        border: {
          subtle: "#1e1e35",
          glow: "#3d2a6a",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-violet": "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, transparent 70%)",
        "mesh-card": "radial-gradient(at 40% 20%, rgba(124,58,237,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(147,51,234,0.05) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(124,58,237,0.2), 0 0 60px rgba(124,58,237,0.08)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.2), 0 0 60px rgba(6,182,212,0.08)",
        card: "0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "streak-glow": "streakGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        streakGlow: {
          "0%": { boxShadow: "0 0 8px rgba(251,191,36,0.4)" },
          "100%": { boxShadow: "0 0 20px rgba(251,191,36,0.8), 0 0 40px rgba(251,191,36,0.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
