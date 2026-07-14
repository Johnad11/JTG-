/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#162099',
        'brand-green': {
          DEFAULT: '#1BA657',
          dark: '#168a49',
        }
      }
    },
  },
  plugins: [],
}
