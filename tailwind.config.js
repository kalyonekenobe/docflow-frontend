/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...(defaultTheme.fontFamily.serif ?? [])],
      },
      colors: {
        green: {
          primary: '#538C87',
          secondary: '#EBFFFD',
        },
        dark: {
          primary: '#2B1B12',
          secondary: '#444444',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#FBF5F1',
        },
        cyan: {
          primary: '#41EBFFFD',
        },
        gray: {
          primary: '#D9D9D9',
          secondary: '#FAFAFA',
        },
        blue: {
          secondary: '#4182F9',
        },
      },
    },
  },
  plugins: [],
};
