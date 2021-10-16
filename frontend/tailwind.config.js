const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      fontFamily: {
        'display': ['"Old Standard TT"', 'serif'],
        'body': ['"PT Sans"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'monsterrat': ['Montserrat', 'sans-serif']
      },
      extend: {},
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
        opacity: ['disabled'],
        borderColor: ['active']
      },
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
