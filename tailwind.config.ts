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
        paper: "#060605",
        panel: "#11100e",
        panelSoft: "#171510",
        ink: "#f4f4f1",
        muted: "#a09a90",
        line: "#34312c",
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
        soft: "0 16px 46px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
