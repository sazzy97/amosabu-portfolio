import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f6f3",
        stone: {
          surface: "#ebe9e4",
          card: "#f2efe9",
        },
        teal: {
          brand: "#025f6e",
          dark: "#01434e",
          light: "#eaf3f5",
        },
        orange: {
          brand: "#ff5900",
          hover: "#e04e00",
        },
        charcoal: "#192021",
        slate: {
          muted: "#5e6667",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "pulse-slow": "pulse-slow 2.4s infinite ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
