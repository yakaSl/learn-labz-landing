/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
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
  plugins: [require("tailwindcss-animate")],

};
