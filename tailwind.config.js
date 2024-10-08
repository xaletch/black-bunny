/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {},
      fontFamily: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
}

