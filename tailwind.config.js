/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      colors: {
        'neon-green': '#00ff9d',
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
        'dark-bg': '#0a0a0a',
      },
      animation: {
        'glitch': 'glitch 5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 5s infinite linear alternate-reverse',
        'blink': 'blink 1s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%': { clipPath: 'rect(31px, 9999px, 94px, 0)' },
          '100%': { clipPath: 'rect(84px, 9999px, 52px, 0)' },
        },
        'glitch-2': {
          '0%': { clipPath: 'rect(65px, 9999px, 33px, 0)' },
          '100%': { clipPath: 'rect(80px, 9999px, 33px, 0)' },
        },
      },
    },
  },
  plugins: [],
}