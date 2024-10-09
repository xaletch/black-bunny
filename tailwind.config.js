/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        white: "var(--text)",
        black: "var(--black)",
      },
      keyframes: {},
      fontFamily: {
        sans: ["Lato", ...fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  plugins: [require("tailwindcss-animate")],
}

