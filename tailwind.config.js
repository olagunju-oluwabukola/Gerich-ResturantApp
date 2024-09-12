/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        yellow: '#DCCA87',
        grey:'#0C0C0C'
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'system-ui',],
        'serif': ['"Cormorant Upright"', 'serif'],
  
    },
  },
  plugins: [],
}
}