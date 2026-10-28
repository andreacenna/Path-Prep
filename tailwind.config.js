/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#060d1c', 900: '#0a1428', 850: '#0e1a33', 800: '#13213f', 700: '#1b2c52', 600: '#26396a' },
        electric: { 300: '#8fbaff', 400: '#6aa6ff', 500: '#2563eb', 600: '#1d4fd0' },
        teal: { 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6' }
      },
      fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'] },
      keyframes: {
        pop: { '0%': { transform: 'scale(.9)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        rise: { '0%': { transform: 'translateY(8px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } }
      },
      animation: { pop: 'pop .25s ease-out', rise: 'rise .3s ease-out' }
    }
  },
  plugins: []
};
