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
        paper: "#F7F6F2",
        ink: "#111111",
        gray: "#686868",
        pine: "#123C29",
        pinedeep: "#0C2B1D",
        gold: "#F2B705",
        golddeep: "#C79404",
        card: "#FFFFFF",
        line: "#E4E1D8",
        pineline: "#23573D",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        ctrl: "12px",
        "ctrl-sm": "8px",
      },
    },
  },
  plugins: [],
};

export default config;
