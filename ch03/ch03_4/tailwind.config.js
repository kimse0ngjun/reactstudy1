/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  safelist: [{pattern: /^line-clamp-(\d+)$/}], // 더하기 -> d, + -> 1개이상
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')]
}
