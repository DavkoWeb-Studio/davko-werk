/** @type {import('tailwindcss').Config} */
const colors = {
  davkoBlue: '#0077be',
  davkoYellow: '#ffcc00',
  davkoDark: '#1a1a1a',
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors,
      backgroundImage: {
        'gradient-davko': `linear-gradient(135deg, ${colors.davkoBlue}, #005a8c)`,
      },
    },
  },
  plugins: [],
};