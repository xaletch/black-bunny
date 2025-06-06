/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'max-mobile': {'max': '380px'},
      'tablet': '640px',
    },
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
        "secondary-100": "var(--secondary-100)",
        "avatar-border": "var(--avatar-border)",
        "swiper-text": "var(--swiper-text)",
        'white-transparent-10': 'rgba(255, 255, 255, 0.1)',
        'white-transparent-0': 'rgba(255, 255, 255, 0)',
        'category-item': 'var(--category-item)',
        'pending': '#ff9114',
        "failed": '#d43a3a',
        'confirmed': '#07b195',
        'option-border': '#d1105f',
        'select-category': '#151515',
        'select-category-border': 'var(--select-category-border)',
        'warning-border': 'var(--warning-border)',
        'key-border': 'var(--key-border)',
        'rgba-success': 'var(--rgba-success)',
        'success-shadow': 'var(--success-shadow)',
        'card': 'var(--bg-card)',
        'category-bg': 'var(--category-bg)',
        'line': 'var(--line)',
        'checkbox': 'var(--checkbox)',
        'setting-border:': 'var(--setting-border)',
        'bg-checkbox': 'var(--bg-checkbox)',
        'border2': 'var(--border2',
      },
      boxShadow: {
        "navbar-shadow": "var(--navbar-shadow)",
        'level-shadow': '0 0 4px 2px rgba(238, 53, 130, 0.36)',
      },
      width: {
        'p-calc': 'calc(100% - 32px)',
      },
      backgroundImage: {
        'balance-bg': "url('./src/assets/images/gradient.png')",
        'balance-button': '#ffffff0d',
        'level-gradient': 'linear-gradient(202deg, #f97239 0%, #ed2f8a 40.99%, #c26cea 86.83%, #8886ee 100%)',
      },
      opacity: {
        '10': '0.1',
        '60': '0.6',
      },
      backdropBlur: {
        custom: '7px',
      },
      transform: {
        'translate': '-100%'
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

