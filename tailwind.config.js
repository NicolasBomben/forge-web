/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#60A5FA",
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
