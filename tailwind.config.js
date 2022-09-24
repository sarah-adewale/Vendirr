/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,css}", 
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
      colors: {
        white_100: '#F3F3F3',
        blue_0: '#F3F3F3',
        blue_100: '#C5F6FD',
        blue_200: '#98EDF9',
        blue_300: '#70E3F2',
        blue_400: '#50D7E9',
        blue_500: '#38CADD',
        blue_600: '#27B9CD',
        blue_700: '#1BA6B8',
        blue_800: '#1390A0',
        blue_900: '#0E7987',
        black_100: '#2D2D2D',
        black_90: '#424242',
        black_80: '#575757',
        black_70: '#6C6C6C',
        black_60: '#818181',
        black_50: '#969696',
        black_40: '#ABABAB',
        black_30: '#C0C0C0',
        black_20: '#D5D5D5',
        black_10: '#EAEAEA',
        primary_100: '#48B8C6',
        primary_90: '#5ABFCC',
        primary_80: '#6DC6D1',
        primary_70: '#7FCDD7',
        primary_60: '#91D4DD',
        primary_50: '#A4DCE3',
        primary_40: '#B6E3E8',
        primary_30: '#C8EAEE',
        primary_20: '#DAF1F4',
        primary_10: '#EDF8F9',
        primary_190: '#071214',
        primary_180: '#0E2528',
        primary_170: '#16373B',
        primary_160: '#1D4A4F',
        primary_150: '#245C63',



      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}
