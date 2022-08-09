/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#128079',
        offWhite: '#F5F8FA'
      },
      screens: {
          'tall': { 'raw': '(min-height: 780px)' },
          // => @media (min-height: 800px) { ... }
        }
      
    },
  },
  plugins: [],
}
