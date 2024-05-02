const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "index.html"
    ],
    theme: {
      extend: {
        screens: {
          sm: "768px",
          md: "1092px",
          lg: "1280px",
          xl: "1920px"
        },
        colors: {
          primary: "#0000FF"
        },
        fontFamily: {
          sans: ["Roboto", ...defaultTheme.fontFamily.sans],    
        }
      },
      
    },
    plugins: [
      require("@tailwindcss/line-clamp")
    ],
  }