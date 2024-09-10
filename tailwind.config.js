/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include Vue components
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "blue-1000": "#3651E6",
        "blue-1100": '#E5E8FB',
      },
      backgroundImage: {
        'btn-bg': "linear-gradient(90deg, #3454E6 0%, #2674EE 100%)",
        'text-gradient': 'linear-gradient(97deg, #3455E7 -15.84%, #2774EE 37.43%)',
      },
      screens: {
        'xs': '390px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1280px',
        '2xl': '1366px',
        '3xl': '1600px',
        '4xl': '1920px',
      }, boxShadow: {
        '3xl': '14px 17px 40px 4px rgba(140, 176, 112, 0.08)',
        '4xl': '0px 4px 34px 10px rgba(0, 0, 0, 0.05)',
        '5xl': '0px 4px 28.3px 0px rgba(47, 98, 234, 0.30)',
      },
      fontFamily: {
        'poppins': ["Poppins, 'sans-serif'"],
      },
      dropShadow: {
        '3xl': '3px 13px 28.3px rgba(47, 98, 234, 0.25)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}