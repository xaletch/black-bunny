/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
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

