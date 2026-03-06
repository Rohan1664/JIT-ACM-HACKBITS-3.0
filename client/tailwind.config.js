/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to scan all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        'space': {
          dark: '#0B0B1F',
          deep: '#14142B',
          purple: '#2D1B3C',
          blue: '#1A2A4A',
        },
        'neon': {
          blue: '#00F0FF',
          magenta: '#FF00FF',
          cyan: '#00FFFF',
          purple: '#9D4EDD',
        }
      },
      // ... rest of your configuration
    },
  },
  plugins: [],
}