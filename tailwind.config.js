/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      color: {
        main: {
          50: '#f2f5fb',
          100: '#e6edf9',
          200: '#d2dcf3',
          300: '#b7c4ea',
          400: '#9aa5df',
          500: '#8189d3',
          600: '#6769c4',
          700: '#5656ac',
          800: '#48498b',
          900: '#1e1f35',
        },
      },
      fontFamily: {
        radioCanada: ['"Radio Canada"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
