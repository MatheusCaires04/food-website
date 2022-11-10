/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      peru: "#cd9452",
      black: "#222",
      white: "#fff",
      "light-black": "#666",
      "light-white": "#ccc",
      "light-bg": "#f5f5f5",
      "dark-bg": "rgba(0, 0, 0, .7)",
    },
    extend: {
      borderColor: {
        borderG: ".1rem solid #aaa",
      },
      boxShadow: {
        shadowG: "0 .5rem 1rem rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};
