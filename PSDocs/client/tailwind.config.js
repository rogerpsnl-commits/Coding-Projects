/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f4f5fb',
          100: '#e5e7f5',
          200: '#c5cae8',
          300: '#8892cc',
          400: '#5d6ab5',
          500: '#424fa0',
          600: '#333e8a',
          700: '#242e72',
          800: '#1a2260',
          900: '#111850',
        },
      },
    },
  },
  plugins: [],
};
