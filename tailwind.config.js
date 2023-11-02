/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'slide-in': 'slide-in 0.3s forwards',
        gradient: 'gradient 10s ease infinite'
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          small: '2px', // rounded-small
          medium: '4px', // rounded-medium
          large: '8px' // rounded-large
        }
      }
    })
  ]
}
