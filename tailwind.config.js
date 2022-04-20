module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      // configuring the custom fonts to be integrated
      // into the tailwind class
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Josefin: ["Josefin Slab", "serif"],
      },
    },
  },
  plugins: [],
};
