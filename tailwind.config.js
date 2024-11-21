/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../src/assets/home.webp')",
        'logo': "url('../src/assets/logo.png')",
        'login': "url('../src/assets/login.webp')",
        '404': "url('../src/assets/404.jpg')",
        'bg-slider': "url('../src/assets/bg-slider.jpg')",
      }
    },
  },
  plugins: [],
}

