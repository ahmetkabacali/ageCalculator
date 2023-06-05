/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins_bold': ['Poppins-Bold', 'sans-serif'],
        'poppins_BoldItalic': ['Poppins-BoldItalic', 'sans-serif'],
        'poppins_ExtraBold': ['Poppins-ExtraBold', 'sans-serif'],
        'poppins_ExtraBoldItalic': ['Poppins-ExtraBoldItalic', 'sans-serif'],
        'poppins_Italic': ['Poppins-Italic', 'sans-serif'],
        'poppins_Regular': ['Poppins-Regular', 'sans-serif'],
      },
    },
  }, plugins: [],
}