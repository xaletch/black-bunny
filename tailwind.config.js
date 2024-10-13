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
        green: "var(--green)",
        button: "var(--button-pink)",
        hover_stroke: "var(--hover-stroke)",
        input_text: "var(--input-text)",
        red_error: "var(--red-err)",
        bg_blur: "var(--bg-blur)",
        dot: "var(--dot)",
        "secondary-100": "var(--secondary-100)"
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

