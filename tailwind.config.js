/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
 
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/sanity.js'
  ],
  theme: {
    extend: {
      colors: {
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
        secondary: {
          50: '#effaff',
          100: '#dff4ff',
          200: '#b8ebff',
          300: '#78ddff',
          400: '#33ccff',
          500: '#06b5f1',
          600: '#0092ce',
          700: '#0075a7',
          800: '#02628a',
          900: '#085172',
        },
      },
      fontFamily: {
        radioCanada: ['"Radio Canada"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        serviceIcon: 'serviceIcon .5s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      keyframes: {
        serviceIcon: {
          '0%': {
            opacity: 0,
            transform: 'scale(3)',
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
