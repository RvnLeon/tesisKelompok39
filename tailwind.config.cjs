module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        sail: {
          "50": "#f2f9fd",
          "100": "#e4f1fa",
          "200": "#b1ddf2",
          "300": "#8cd0ed",
          "400": "#4fb7e1",
          "500": "#299ece",
          "600": "#1a7faf",
          "700": "#16658e",
          "800": "#165676",
          "900": "#184862",
          "950": "#102e41",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
