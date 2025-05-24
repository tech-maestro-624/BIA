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
          50: '#f0f0ff',
          100: '#e5e5ff',
          200: '#d0d0ff',
          300: '#b0b0ff',
          400: '#8a8aff',
          500: '#4A5FE7',
          600: '#2D2A87',
          700: '#1A1660',
          800: '#151245',
          900: '#000069',
        },
        'bia-blue': '#000069',
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6B35',
          600: '#E85A2B',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        yellow: {
          500: '#FFB800',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1200px',
      }
    },
  },
  plugins: [],
} 