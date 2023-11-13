/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      backgroundImage: {
        'header-img': "url('/Images/capa-inicio.jpg')"
      }
    },
  },
  plugins: [],
}

