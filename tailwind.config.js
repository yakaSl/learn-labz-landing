/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004c4c',
        secondary: '#15ae89',
        textDark: '#212129',
        white: '#ffffff',
        dark: '#004c4c',
        gray: '#666666',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
