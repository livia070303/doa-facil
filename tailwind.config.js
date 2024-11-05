// tailwind.config.js

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
        'bege-100': '#F9F9F9',

        'vermelho-claro': '#FF594B',
        'vermelho-médio': '#FC4638',
        'vermelho-escuro': '#D13B2D',

        'orange': '#FA8232',
        'orange-ring': '#FFE7D6',

        "low-gray": "#EDEDED",
        "low-gray-100": "#475156",

        "pink": "#7B61FF",

        "green": "#2DB224",

        // Cores para o modo de alto contraste
        'custom-yellow': '#ffff00',
        'custom-black': '#000000',
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant('contrast', '.contrast &');
    },
  ],
};