/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2463",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3BCEAC",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#EE6C4D",
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
