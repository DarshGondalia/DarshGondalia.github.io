/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // We'll toggle this class manually
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}