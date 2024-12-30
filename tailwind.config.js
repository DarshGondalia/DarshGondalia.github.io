/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // We'll toggle this class manually
  content: [
    "my-portfolio/app/**/*.{js,ts,jsx,tsx}",
    "my-portfolio/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}