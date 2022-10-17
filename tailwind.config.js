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
        'lila-ciba': '#ae9eb9',
      },
      fontFamily: {
        'koulen': ['Koulen'],
        'bebas': ['Bebas Neue'],
        'roboto': ['Roboto Condensed'],
        'volkhov': ['Volkhov']
      }
    },
  },
  plugins: [],
}
