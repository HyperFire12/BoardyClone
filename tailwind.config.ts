import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Red Hat Display"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "scroll-pause": "scroll-pause 3s ease-in-out infinite",
      },
      keyframes: {
        "scroll-pause": {
          "0%, 100%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(-100%)" },
          "66%, 100%": { transform: "translateY(-200%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
