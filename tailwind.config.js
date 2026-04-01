/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark700: '#5A6573',
        dark900: '#1A2B3D',
        primary700: '#1882FF',
      },
    },
  },
  plugins: [],
}
