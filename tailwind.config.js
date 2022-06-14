module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Slab", "serif"],
        Sensation: ["Sansation", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      gridTemplateRows: {
        // Simple 12 row grid
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
        adminformbgcolor: "#F1F1F1",
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
  plugins: [require("@tailwindcss/forms")],
};
