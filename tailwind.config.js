/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-pink': '#FFC0CB',
        'red-text': '#DC3931',
        'accents': '#334893',
        'main-background': '#FDE9EF',
      },
      fontFamily: {
        benton: ['"benton-modern-display", serif'],
        gastromond: ['"gastromond", serif'],
        houschka: ['"houschka-rounded", sans-serif'],
      },
    },
  },
  plugins: [],
}
