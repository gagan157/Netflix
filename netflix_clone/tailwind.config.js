module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
     
      screens: {
        'xs': '300px',
          // @media (min-width: 640px) { ... }

        'max-xs': {'max':'640px'},
          // @media (max-width: 640px) { ... }
        'max-custom':{'max':'480px'}
        
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio'),require('tailwind-scrollbar-hide')],
}
