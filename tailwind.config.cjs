/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "gray-20": "#F4F6F6",
        "gray-50": "#D5DBDB",
        "gray-100": "#7F8C8D",
        "gray-500": "#283747",
        "primary-100": "#D4EFDF",
        "primary-300": "#52BE80",
        "primary-500": "#196F3D",
        "secondary-400": "#5DADE2",
        "secondary-500": "#2874A6"
      },
      backgroundImage: (theme)=> ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%"
        // "mobile-home": "url("./assets..)"" 
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        // evolvetext: "url('./assets/EvolveText.png')"",
        // abstractwaves: "url('./assets/AbstractWaves.png')""
        // sprkles: "url('./assets/...')""
        // circles: "url('./assets/...')""
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}