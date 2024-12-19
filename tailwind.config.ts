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
      backgroundImage: {
        "gradient-blue-purple": "linear-gradient(to right, #3b82f6, #a855f7)",
      },
      boxShadow: {
        "custom-light": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "custom-main": "0px 7px 29px rgba(100, 100, 111, 0.2)",
        "custom-heavy":
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        "custom-layered":
          "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        "custom-light2": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
