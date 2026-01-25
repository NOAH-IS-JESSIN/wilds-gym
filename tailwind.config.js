/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wild: {
          black: "#0B0F0C",
          dark: "#141A15",
          white: "#EAEFE6",
          gray: "#8E948C",
          // NEW LIGHTER GREEN (Electric Fern)
          accent: "#26FF63", 
          // Even lighter for hover states
          glow: "#80FFA8",
          depth: "#0E3F28",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        beast: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}