/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87CEEB',
        'soft-blue': '#B0E0E6',
        'warm-orange': '#FF8C42',
        'cloud-white': '#F8F9FA',
        'brand-blue': '#2563EB',
        'brand-teal': '#14B8A6',
        'brand-orange': '#F97316',
        'brand-pink': '#EC4899',
        'brand-gold': '#F59E0B',
      },
      fontFamily: {
        'playful': ['Comic Sans MS', 'cursive', 'sans-serif'],
        'baloo': ['"Baloo 2"', 'cursive'],
      },
      boxShadow: {
        'cloud': '0 8px 16px rgba(135, 206, 235, 0.2)',
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}





