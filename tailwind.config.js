module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Slab", "serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
        squarePeg: ["Square Peg", "cursive"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      textBluePhant: "#0077B6",
      fullBlackPhant: "#000000",
      blackPhant: "#212529",
      whitePhant: "#ffffff",
      darkBluePhant: "#369FD7",
      errorText: "#f51c1c",
    },
  },
  plugins: [],
};
