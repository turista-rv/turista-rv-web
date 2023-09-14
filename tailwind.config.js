/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.ts"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    keyframes: {
      'open-menu': {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(0)',
        },
      },

      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },

      colors: {
        transparent: 'transparent',
        blueDark: '#0D7ABF',
        blueMid: '#118FCF',
        blueLight: '#1397D6',

        greenDark: '#2BA245',
        greenMid: '#CBE4B4',
        greenLight: '#E5F0DB',

        orangeDark: '#F8931F',

        //BASE
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
    },
  },
  plugins: [],
}

