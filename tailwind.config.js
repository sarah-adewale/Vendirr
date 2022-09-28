/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**.{html,js,css}", 
    "./views/*.ejs" //wild card for all ejs files
  ], 
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
    },
    colors: {
        darkGrayish: 'hsla(187, 79%, 35%, 1)',
        "blue-0": '#F3F3F3',
        "blue-100": '#C5F6FD',
        "blue-200": '#98EDF9',
        "blue-300": '#70E3F2',
        "blue-400": '#50D7E9',
        "blue-500": '#38CADD',
        "blue-600": '#27B9CD',
        "blue-700": '#1BA6B8',
        "blue-800": '#1390A0',
        "blue-900": '#0E7987',
        "black-100": '#2D2D2D',
        "black-90": '#424242',
        "black-80": '#575757',
        "black-70": '#6C6C6C',
        "black-60": '#818181',
        "black-50": '#969696',
        "black-40": '#ABABAB',
        "black-30": '#C0C0C0',
        "black-20": '#D5D5D5',
        "black-10": '#EAEAEA',
        "white-100": '#D5D5D5',
        "primary-100": '#48B8C6',
        "primary-90": '#5ABFCC',
        "primary-80": '#6DC6D1',
        "primary-70": '#7FCDD7',
        "primary-60": '#91D4DD',
        "primary-50": '#A4DCE3',
        "primary-40": '#B6E3E8',
        "primary-30": '#C8EAEE',
        "primary-20": '#DAF1F4',
        "primary-10": '#EDF8F9',
        "primary-190": '#071214',
        "primary-180": '#0E2528',
        "primary-170": '#16373B',
        "primary-160": '#1D4A4F',
        "primary-150": '#245C63',

      },
      fontFamily: {
      sans: ['Epilogue', 'sans-serif'],
      //serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}
