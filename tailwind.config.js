const BLOG = require('./blog.config')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        noEmoji: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
