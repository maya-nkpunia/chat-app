import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',         // If you're using an HTML entry point
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/TS/React files in your `src` folder
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
