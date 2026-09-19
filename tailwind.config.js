/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["InterVariable", "sans-serif"],
      },
      colors: {
        brand: { DEFAULT: "#2B57F0", dark: "#1B3DB8", soft: "#F1F5FF", foreground: "#FFFFFF" },
        ink: { DEFAULT: "#0B1424", soft: "#16233C", foreground: "#F5F8FF" },
        cyan: { brand: "#17B8C7" },
        primary: { DEFAULT: "#2B57F0", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#17B8C7", foreground: "#04222A" },
        accent: { DEFAULT: "#2B57F0", foreground: "#FFFFFF" },
        background: "#FFFFFF",
        foreground: "#0B1424",
        muted: { DEFAULT: "#FAFBFE", foreground: "#57647C" },
        line: "#E9EDF5",
        dark: {
          background: "#0B1424",
          card: "#101B30",
          primary: "#F5F8FF",
          muted: "#98A4B8",
          accent: "#2B57F0",
          accent2: "#17B8C7",
          secondary: "#17B8C7",
          line: "rgba(255,255,255,0.10)",
        },
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        fadeIn: { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        bubbleIn: { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        typingDot: { "0%, 60%, 100%": { opacity: ".25", transform: "translateY(0)" }, "30%": { opacity: "1", transform: "translateY(-3px)" } },
        glowPulse: { "0%, 100%": { opacity: ".35" }, "50%": { opacity: ".7" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        bubbleIn: "bubbleIn 0.4s ease-out forwards",
        typingDot: "typingDot 1.2s infinite",
        glowPulse: "glowPulse 9s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
};
