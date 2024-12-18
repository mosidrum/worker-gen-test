import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "#060122",
        primary: "#111111",
        secondary: "#9333ea",
        accent: "#f59e0b",
      },
    },
  },
  plugins: [],
} satisfies Config;
