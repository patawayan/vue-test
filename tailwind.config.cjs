/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background-1': '#ffffff',
        'background-2': '#ececec',
        'text': '#000000',
        'button': '#636262',
        'img-color-1': '#c4c4c4',
        'img-color-2': '#9d9d9d',
      },
    }  
  },
  plugins: [],
}
