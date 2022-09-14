/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 20%, #43E7AD 41%, #E1D55D 70.5%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #996DFFFF 75%)',
      }},
  },
  plugins: [],
}
