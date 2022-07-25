/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#f1e9c9",
          700: "#DBAC2C",
          800: "#c47f17",
        },

        purple: {
          100: "#ebe5f9",
          700: "#8047f8",
          800: "#4b2995",
        },

        gray: {
          900: "#272221",
          800: "#403937",
          700: "#574f4d",
          600: "#8d8686",
          500: "#d7d5d5",
          400: "#e6e5e5",
          300: "#ededed",
          200: "#f3f2f2",
          100: "#fafafa",
        },
      },

      fontFamily: {
        roboto: "'Roboto', sans-serif",
        baloo: "'Baloo 2', cursive",
      },
    },
  },
  plugins: [],
};
