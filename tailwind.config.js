/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./dist/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-red-bg': 'rgba(216, 49, 91, 0.58)',
        'glass-red-border': 'rgba(216, 49, 91, 0.13)',
      },
      boxShadow: {
        'glass-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        '7-6': '7.6px',
      },
    },
  },
  plugins: [],
};