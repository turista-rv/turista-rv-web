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
        niveau: ['Niveau Grotesk', 'sans'],
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
        '7': '0.4375rem',  // 7px / 16px = 0.4375rem
        '10': '0.625rem',  // 10px / 16px = 0.625rem
        '12': '0.75rem',   // 12px / 16px = 0.75rem
        '14': '0.875rem',  // 14px / 16px = 0.875rem
        '16': '1rem',      // 16px / 16px = 1rem
        '18': '1.125rem',  // 18px / 16px = 1.125rem
        '24': '1.5rem',    // 24px / 16px = 1.5rem
      },
      width: {
        '41': '2.5625rem',  // 41px / 16px = 2.5625rem
        '200': '12.5rem',   // 200px / 16px = 12.5rem
        '314': '19.625rem', // 314px / 16px = 19.625rem
        '500': '31.25rem',  // 500px / 16px = 31.25rem
      },
      height: {
        '24': '1.5rem',     // 24px / 16px = 1.5rem
        '55': '3.4375rem',  // 55px / 16px = 3.4375rem
      },
      margin: {
        '35': '2.1875rem',  // 35px / 16px = 2.1875rem
      },
    },
  },
}



