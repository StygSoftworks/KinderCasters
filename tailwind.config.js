/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"IM Fell English SC"', 'serif'],
        'body': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
