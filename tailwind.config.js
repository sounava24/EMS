/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#14B8A6', // Teal-500
        'primary-hover': '#0D9488', // Teal-600
        'background': '#111827', // Gray-900
        'surface': '#1F2937', // Gray-800
        'text-primary': '#F3F4F6', // Gray-100
        'text-secondary': '#9CA3AF', // Gray-400
        'border': '#374151', // Gray-700
        'success': '#10B981', // Emerald-500
        'danger': '#EF4444', // Red-500
        'warning': '#F59E0B', // Amber-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
