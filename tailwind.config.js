/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter:["InterVariable", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#673AB7",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF5722",
          foreground: "#FFFFFF",
        },
        background: "#F5F5F5",
        foreground: "#333333",

        dark: {
          background: "#181818",
          primary: "#F7F7F7",
          accent: "#FF5722",
          accent2: "#673AB7",
          secondary: "#0EA5E9",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        waveDots: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "30px 60px" },
          "100%": { backgroundPosition: "0 0" },
        },
        waveClients: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "0 60px" }, // solo vertical
          "100%": { backgroundPosition: "0 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        waveDots: "waveDots 10s ease-in-out infinite",
        waveDotsDark: "waveDots 6s ease-in-out infinite",
        waveClient: 'waveHero 20s ease-in-out infinite',
        waveClientDark: 'waveHero 15s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
};
