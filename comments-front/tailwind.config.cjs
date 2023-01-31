/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'ml-[20px]',
    'ml-[40px]',
    'ml-[60px]',
    'ml-[80px]',
    'ml-[100px]',
  ],
}