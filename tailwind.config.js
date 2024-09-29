/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'azul-escuro': '#06333E',
        'azul-médio': '#0E87A9',
        'azul-claro': '#2CBAE2',
        'azul-claro-hover': '#00C6C6',
        'azul-separator': '#158A8A',
    
        "texto-infor": "#A0A0A0",
        "texto-label": "#313131",
    
        'bege': '#E6D5B7',
    
        'vermelho-claro': '#FF594B',
        'vermelho-médio': '#FC4638',
        'vermelho-escuro': '#D13B2D',

        'orange': '#FA8232',
        'orange-ring': '#FFE7D6',

        "low-gray": "#EDEDED",

      }
      
    },
  },
  plugins: [],
}

