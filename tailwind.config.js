/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      lg: '768px',
      // lg: '976px',
      xl: '1440px',
    },
    colors: {
      'light-green': '#a8d2a5',
      green: '#156B2D',
      grey: '#3B3B3B',
      'light-blue-100': '#C8E3EC',
      'light-blue-200': '#ACD4E1',
      'light-red': '#D16666',
      light: '#F2F5F6',
      'light-100': '#D4DFE3',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Monda', 'serif'],
    },
    stroke: (theme) => ({
      'light-red': theme('colors.light-red'),
      green: theme('colors.green'),
      'light-blue': theme('colors.light-blue-200'),
    }),
    extend: {
      backgroundImage: {
        'wave': "url('./src/assets/background.svg')",
      }
    },
  },
  plugins: [],
};
