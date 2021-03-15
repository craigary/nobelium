const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      noEmoji: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
