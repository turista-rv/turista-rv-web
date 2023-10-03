/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
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
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
        '50': '40px',
        '60': '40px',
        '70': '40px',
        '80': '40px',
        'small': '14px', // Tamanho da fonte menor
      },
      
      padding: {
        'small': '8px 16px', // Espaçamento menor 
      },
  
      width: {
        '41': '41px',
        '200': '200px',
        '314': '314px',
        '400': '400px',
        '500': '500px',
      },
  
      height: {
        '24': '24px',
        '30': '30px',
        '55': '55px',
        '170': '170px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '600': '600px',
      },
    },
  },

  plugins: [],
}

