/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#f9f9f9',
        'card-light': '#ffffff',
        'dark': 'rgb(23 27 37)',
        'card-dark': 'rgb(11 15 25)',
        'card-soft-dark': '#10141f',
        'highlight-dark': '#020617'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'teste': 'var(--loading-gradient-light)'
      },
      blur: {
        full: '194px'
      }
    },
  },
  plugins: [],
}

