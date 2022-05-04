module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Slab", "serif"],
        Sensation: ["Sansation", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        textBluePhant: "#0077B6",
        fullBlackPhant: "#000000",
        blackPhant: "#212529",
        aquaMarine: "#7fffd4",
        whitePhant: "#ffffff",
        darkBluePhant: "#369FD7",
        errorText: "#f51c1c",
        adminFooterBackground: "#AFDCF3",
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
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: "0.5em",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};