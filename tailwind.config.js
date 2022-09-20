/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/PageShell.tsx",
    "./renderer/_default.page.server.tsx",
    "./renderer/_error.page.tsx",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      zen : "'Zen Dots', cursive",
      zenMaru : "'Zen Maru Gothic', sans-serif",
      zenLoop : "'Zen Loop', cursive"
      },
      colors: {
          nsgreen : '#00FFC3'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
