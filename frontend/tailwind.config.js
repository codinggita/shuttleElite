/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488', // Teal
          light: '#2dd4bf',
          dark: '#0f766e',
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Soft Purple
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        accent: {
          DEFAULT: '#f97316', // Coral/Orange
          light: '#fb923c',
          dark: '#ea580c',
        },
        background: '#f8fafc', // Light Gray / Off-white
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
