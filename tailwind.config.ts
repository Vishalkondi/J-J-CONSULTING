import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#08121F",
        navy: { DEFAULT: "#0C2038", 800: "#112C4D", 700: "#183A63" },
        steel: { DEFAULT: "#3E6FA8", light: "#8FB0D6" },
        gold: { DEFAULT: "#B8985A", light: "#D2B97F", dark: "#8C6F38" },
        paper: "#F6F3EE",
        bone: "#EAE5DB",
        charcoal: "#1D2228",
        graphite: "#4B525B",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: { wider2: "0.14em" },
      maxWidth: { page: "1360px" },
    },
  },
  plugins: [],
};
export default config;
