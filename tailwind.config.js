/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'bg': '#121212',
      'greendark': '#849800',
      'greenclear': '#e0fe00',
      'whitebg': '#FFFFFF',
      'borderbg': '#e5e7eb',
      'bgbg': '#212529',
    },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
