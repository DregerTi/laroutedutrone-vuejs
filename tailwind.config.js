/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      'black': '#222222',
      'white': '#FAFCFE',
      'lightgrey': '#EBEBEB',
      'grey': '#7E7E7E',
      'primary': '#1C5D99',
      'secondary': '#8EC9D1',
      'success': '#3ABA6B',
      'red': '#EB334B',
      'warning': '#FFA630',
    },

    extend: {},
  },
  plugins: [],
}
