module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: false,
  theme: {
    extend: {
    },
  },
  variants: {
    
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
    ,require('@tailwindcss/forms')
    ,require('@tailwindcss/line-clamp')
    ,require('@tailwindcss/typography')
  ],
};
