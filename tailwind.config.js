/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f2fe',
          yellow: '#fff200',
          violet: '#bf00ff'
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f2fe, 0 0 10px #00f2fe, 0 0 15px #00f2fe' },
          '100%': { boxShadow: '0 0 10px #00f2fe, 0 0 20px #00f2fe, 0 0 30px #00f2fe' }
        }
      }
    },
  },
  plugins: [],
};