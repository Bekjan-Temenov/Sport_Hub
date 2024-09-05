/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Pacifico", "cursive"], 
        comfortaa: ["Comfortaa", "cursive"],
        sans: ['Montserrat', 'sans-serif'], 
        orelega: ['"Orelega One"', 'cursive'],
      },
    },
  },
  plugins: [],
};
