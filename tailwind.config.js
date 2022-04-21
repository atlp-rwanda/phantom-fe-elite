module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      // configuring the custom fonts to be integrated
      // into the tailwind class
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Josefin: ["Josefin Slab", "serif"],
=======
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Slab", "serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
<<<<<<< HEAD
        squarePeg: ["Square Peg", 'cursive'],
>>>>>>> 411a8ad ( chore(setup): setup tailwind)
=======
        squarePeg: ["Square Peg", "cursive"],
>>>>>>> 97fe759 (feat(landing-page): implement responsiveness)
      },
      // backgroundImage: {
      //       'nature': "url('./src/assets/images/Squares.jpg')",
      //       // "nature-dark": "url('/nature-dark.jpg')",
      //     },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      textBluePhant: "#0077B6",
      fullBlackPhant: "#000000",
      blackPhant: "#212529",
      whitePhant: "#ffffff",
      darkBluePhant: "#369FD7",
    },
  },
  plugins: [],
};
<<<<<<< HEAD
=======

// font-family: 'Josefin Slab', serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Square Peg', cursive;
>>>>>>> 411a8ad ( chore(setup): setup tailwind)
=======
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
>>>>>>> 48418c0 (Initial tailwindcss setup)
