// tailwind.config.js

const { lightFormat } = require("date-fns");

module.exports = {
  content: [],
  content: [
    "./app/**/*.{tsx, ts, jsx, js}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3ba44f",
        secondary: "#F58E18",
        terciary: "#4e6e5d",
        gray: "#4d5057",
        lightGray: "#cfcfcf",
      },
    },
  },
  plugins: [],
};
