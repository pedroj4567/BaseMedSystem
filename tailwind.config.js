/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html',"./src/**/*.jsx"],
  theme: {
    extend: {},
    fontFamily:{
      'body' : ['Quicksand']
    },
    animation: {
      'slide-in-center': 'slide-in-center 0.3s ease-in-out',
    },
    keyframes: {
      'slide-in-center': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
  },
  plugins: [],
}

