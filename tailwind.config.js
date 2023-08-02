/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./public/*.html', './public/js/*.js', './public/img/user.svg'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': ' 480px',
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [
    require('autoprefixer')
  ]
}
