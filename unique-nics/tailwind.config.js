/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'raisin-black': '#2e2836',
      'wenge': '#735d5d',
      'timberwolf': '#d7cfd0',
      'platinum': '#d9d9d9',
      'desert-sand': '#ddc1b0',
      'light-coral': '#ee818a',
      'melon': '#f1b6aa',
      'eggplant': '#a67585',
      'mountbatten-pink': '#573842',
      'indigo-shadow': '#4133b7',
    },
    extend: {},
  },
  plugins: [
  ],
};
