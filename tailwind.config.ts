import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#070B18", 900: "#0B1020", 800: "#121A33", 700: "#1C2748" },
        brand: { 400: "#5C8BFF", 500: "#2F6BFF", 600: "#2557E6", 700: "#1D45B8" },
        violet: { 400: "#9A82FF", 500: "#7C5CFF", 600: "#6444E6" },
        mist: { 50: "#F6F8FC", 100: "#EEF1F7", 200: "#DDE3EF" },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,16,32,.04), 0 8px 24px -12px rgba(11,16,32,.12)",
        lift: "0 2px 4px rgba(11,16,32,.05), 0 16px 36px -14px rgba(37,87,230,.28)",
      },
    },
  },
  plugins: [],
};
export default config;
