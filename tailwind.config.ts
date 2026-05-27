import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#050506",
        ink: "#f4f4f1",
        muted: "#8e918b",
        line: "#252724",
        sage: "#f1d46d",
        rust: "#b98aa0",
        bluegray: "#d5d6d1",
        butter: "#f1d46d"
      },
      fontFamily: {
        sans: ["var(--font-sora)", "Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Newsreader", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(32, 29, 25, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
