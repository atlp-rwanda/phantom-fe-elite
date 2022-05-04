
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Slab", "serif"],
        Sensation: ["Sansation", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      gridTemplateRows: {
        // Simple 8 row grid
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
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
  },
  plugins: [require("flowbite/plugin")],
};
