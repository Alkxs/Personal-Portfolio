/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-main': '#0a192f',
      },
      screens: {
        sm: '500px',
      },
      textColor: {
        'dark-main': '#0a192f',
      },
    },
  },
  plugins: [],
}
