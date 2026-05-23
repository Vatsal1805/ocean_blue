/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          black: "#000000",
          card1: "#0a0a0a",
          card2: "#111111",
          border: "#222222",
          white: "#ffffff",
          grey: "#888888",
          lightBg: "#f5f5f5",
          lightCard: "#ffffff",
          lightText: "#111111",
        }
      },
      spacing: {
        '120': '120px',
      }
    },
  },
  plugins: [],
}
