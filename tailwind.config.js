/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: "Libre Caslon Text, serif",
      sans: "Nunito Sans, sans-serif",
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
