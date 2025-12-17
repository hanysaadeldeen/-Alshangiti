/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff2ef", // rgb(239, 242, 239)
          100: "#ced5ce", // rgb(206, 213, 206)
          200: "#b6c1b6", // rgb(182, 193, 182)
          300: "#95a595", // rgb(149, 165, 149)
          400: "#819481", // rgb(129, 148, 129)
          500: "#617961", // rgb( 97, 121,  97)
          600: "#586e58", // rgb( 88, 110,  88)
          700: "#455645", // rgba(69, 86, 69, 1)
          900: "#293329", // rgba(69, 86, 69, 1)
        },
        secondary: {
          DEFAULT: "#EEC882", // rgb(238, 200, 130)
        },
        text: {
          DEFAULT: "#293329", // rgb(41, 51, 41) - Main Text
          small: "#63676B", // rgb(99, 103, 107) - Small Text
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
