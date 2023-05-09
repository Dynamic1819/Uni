/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["public/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'mdl':'896px',
      'xs': '415px',
      'xxs': '300px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        primary: '#010070',
        secondary:'#9a0004',
      },
    },
},
  plugins: [
  ],
}

