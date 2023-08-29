/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-md-gray': '#5D5D6D',
        'custom-light-gray': '#f0f0f5',
        'texto-dark': '#737380',
        'off-white': '#f6f6f9',
      },
    },
  },
  plugins: [],
}

