/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        cards: {
          100: "#EA4335",
          200: "#34A853",
          300: "#4285F4",
          400: "#FDE293",
          500: "#000000",
          600: "#F9AB00",
        },
        text: {
          dark: "#0D0D0D"
        }
      },
    },
    screens: {
      xs: "540px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      sxl: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};