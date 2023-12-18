const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      animation: {
        slide: "slide 1.2s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    plugins: [],
  },
};
