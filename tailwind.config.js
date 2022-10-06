/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violeta-ciba': '#533073',
        'verde-ciba': '#C1D72F',
      },
      fontFamily: {
        'koulen': ['Koulen']
      }
    },
  },
  plugins: [],
}
