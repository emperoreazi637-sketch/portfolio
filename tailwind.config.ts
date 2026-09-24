import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F5EF",
        pine: "#173F2B",
        pinedeep: "#0F2E1F",
        gold: "#F4B400",
        goldeep: "#D9A000",
        ink: "#151515",
        stone: "#686868",
        card: "#FFFFFF",
        line: "#E5E1D8",
        pineline: "#2A5A3E",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        ctrl: "18px",
        "ctrl-sm": "12px",
      },
    },
  },
  plugins: [],
};

export default config;
