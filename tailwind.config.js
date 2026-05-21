/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: "#f5e642",
        border: "#222222",
        muted: "#888888",
      },
      textColor: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: "#f5e642",
        muted: "#888888",
      },
      backgroundColor: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: "#f5e642",
        border: "#222222",
      },
      borderColor: {
        border: "#222222",
        accent: "#f5e642",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-slow": "marquee 30s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  darkMode: "class",
};
