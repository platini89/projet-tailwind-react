/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode : "class",
  theme: {
    extend: {

      fontFamily :{
        poppins :["poppins", "sans-serif"],
      },

      colors: {
        primary: "#007ACC",
        button: "#C71585",
        secondary: "#ffffe0",
      }  ,
    
    },
  },
  plugins: [],
}

