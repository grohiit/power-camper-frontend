const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // plugins: [require("tw-elements/dist/plugin")],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Balsamiq: ["'Balsamiq Sans', cursive"],
        Bubblegum: ["'Bubblegum Sans', cursive"],
        Cabin: ["'Cabin', sans-serif"],
      },
    },
  },
  plugins: [],
}
