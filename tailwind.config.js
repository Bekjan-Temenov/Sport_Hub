/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Pacifico', 'cursive'], // Если планируется использовать этот шрифт
        comfortaa: ['Comfortaa', 'cursive'], // Исправленное название шрифта
        roboto: ['Roboto', 'sans-serif'], // Отдельно добавляем Roboto для удобства
        mycustomfont: ['MyCustomFont', 'sans-serif'], // Если нужен шрифт из @font-face
      },
    },
  },
  plugins: [],
}
