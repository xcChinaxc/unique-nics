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
      'never-forget': '#a67585',
      'light-wallis': '#d7cfd0',
      'apple-valley': '#ee818a',
      'just-right': '#ddc1b0',
      'sweet-sheba': '#f1b6aa',
      'grayred': '#735d5d'
    },
    extend: {},
  },
  plugins: [],
};
