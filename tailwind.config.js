/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FCD34D",
          foreground: "#FFFFFF",
        },
        background: "#F5F5F5",
        foreground: "#333333",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
