/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors');

const colors = {
  transparent: twColors.transparent,
  black: '#2E3239',
  white: twColors.white,
  gray: "#CDCDCD",
  primary: '#FF9902',
  secondary: '#161D25',
  'bg-color': '#F2F2F5',
  aqua: '#268697',
  red: twColors.red[400],
};

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    //"./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      },
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4xl': '2.58rem',
        '5xl': '3.45rem',
        '6xl': '4.3rem',
        '7xl': '5.17rem',
        '8xl': '6.9rem',
        '9xl': '9.2rem',
      },
      KeyframeEffect: {
        animationOpacity: {
          from: { opacity: 0.2 },
          to: { opacity: 1 },
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      Animation: {
        opacity: 'animationOpacity .5s easy-in-out',
        scaleIn: 'scaleIn .35s easy-in-out',
      },
    },
  },
  plugins: [],
};
