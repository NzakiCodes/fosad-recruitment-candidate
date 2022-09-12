/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '17':'4.25rem'
      },
      colors:{
        primary:"#98CBFF",
        secondary:"#002D5B",
        secondaryBorder:"#1A4374"
      },
      fontFamily:{
        'sans':['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/landing-header-pattern.svg') ",
        'hero-card-pattern': "url('/assets/landing-header-card-pattern.svg') ",
      },
    },
  },
  plugins: [],
}