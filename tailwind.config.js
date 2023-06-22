/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'default': '#E0E0E0',
        'danger':'#D32F2F',
        'primary': '#2962FF',
        'secondary': '#2962FF',
        'hovergray': '#AEAEAE',
        'textgray': '#3F3F3F',
        'disabled': '#9E9E9E',
      },
    },
  },
  plugins: [],
}

