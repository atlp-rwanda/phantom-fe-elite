module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        josefin: ["Josefin Slab", "serif"],
      },
    },
    screen: {

      'sm':'425px',
      'md':'768px',
      'xl':'1024px',
      '2xl':'1280px',
    },
  },
  plugins: [],
};