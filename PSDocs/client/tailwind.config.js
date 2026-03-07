/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f7f7f8',
          100: '#ebebef',
          200: '#d5d5df',
          300: '#b0b0c0',
          400: '#6c6c89',
          500: '#55556d',
          600: '#3d3d52',
          700: '#2a2a38',
          800: '#1d1d22',
          900: '#121217',
        },
      },
    },
  },
  plugins: [],
};
