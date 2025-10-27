/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      BebasNeue: ['Bebas Neue', "cursive"],
      Roboto: ['Roboto', "sans-serif"]

    },
    screens: {
      'xsm': '230px',
      'sm': '375px',
      'md': '768px',
      'mdsm' : '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [],
}