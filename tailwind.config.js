/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        glitch: 'glitch-anim-1 2s infinite linear alternate-reverse',
      },
      keyframes: {
        'glitch-anim-1': {
          '0%': {
            clip: 'rect(42px, 9999px, 44px, 0)',
            transform: 'translate(3px, -3px)',
          },
          '100%': {
            clip: 'rect(12px, 9999px, 14px, 0)',
            transform: 'translate(-3px, 3px)',
          },
        },
      },
    },
  },
  plugins: [],
};