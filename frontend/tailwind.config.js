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
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          light: '#3b82f6'
        },
        secondary: {
          DEFAULT: '#1e40af',
          hover: '#1e3a8a'
        },
        accent: {
          DEFAULT: '#f97316',
          hover: '#ea580c'
        }
      },
    },
  },
  plugins: [],
}