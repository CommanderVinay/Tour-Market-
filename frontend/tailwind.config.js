/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1120',
          deep: '#0F172A',
          slate: '#1E293B',
          primary: '#EF233C', // vibrant red (MakeMyTrip Red)
          secondary: '#D90429', // deep red
          accent: '#FF5E62', // rose/coral
          accentHover: '#E01E2E',
          textMain: '#F8FAFC',
          textMuted: '#94A3B8',
          cardBg: 'rgba(30, 41, 59, 0.7)',
          cardBorder: 'rgba(255, 255, 255, 0.08)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
