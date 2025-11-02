/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './locales/**/*.{json}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F6EEE0',
          DEFAULT: '#D7A86E',
          dark: '#B27C44'
        }
      }
    }
  },
  plugins: []
};
