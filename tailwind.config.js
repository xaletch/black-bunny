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
        dark_gray: "var(--dark-gray)",
        error: "var(--red)",
        gray: "var(--gray)",
        icon_bg: "var(--icon-bg)",
        red_light: "var(--red-light)",
        red_transparent: "var(--red-transparent)",
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

