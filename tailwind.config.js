/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        blueDark: '#0D7ABF',
        blueMid: '#118FCF',
        blueLight: '#1397D6',
  
        greenDark: '#2BA245',
        greenMid: '#CBE4B4',
        greenLight: '#E5F0DB',
  
        orangeDark: '#F8931F',

        grays1: '#1B1D1E',
        grays2: '#333638',
        grays3: '#5C6265',
        grays4: '#B9BBBC',
  
  
        grays5: '#DDDEDF',
        grays6: '#EFF0F0',
        grays7: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontSize: {
        '7': '7px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '24': '24px',
      },
      
  
      width: {
        '41': '41px',
        '200': '200px',
        '314': '314px',
        '500': '500px',
      },
  
      height: {
        '24': '24px',
        '55': '55px',
      },
      margin: {
        '12': '12px',  // 35px / 16px = 2.1875rem
        '20': '20px',  // 35px / 16px = 2.1875rem
        '25': '25px',  // 35px / 16px = 2.1875rem
        '35': '35px',  // 35px / 16px = 2.1875rem
        '40': '40px',     // 35px / 16px = 2.1875rem
  
      },
    },
  },

  plugins: [],
}

