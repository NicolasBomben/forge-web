/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#FAFAFA",
        foreground: "#0A0A0A",
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#0A0A0A",
          foreground: "#FAFAFA",
        },
        border: "#E5E5E5",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        scaleIn: "scaleIn 0.6s ease-out forwards",
      },
    },
  },
  darkMode: "class",
};
