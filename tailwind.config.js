/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#515B6F", 
        skyBlue: "#4640DE", 
        darkText: "#202430"
      },
      fontFamily: {
        clash: ['Clash Display', 'serif'],
        epilogue: ['Epilogue', 'sans-serif'], //// Replace 'General Sans' with your selected font name
      },
    },
  },
  plugins: [],
};
