/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
   screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors:{
      primary:"#0077B6",
      secondary:"#369FD7",
      red:'#FC2249',
      isLoadingColor:"#AFDCF3",
      third:{
        'text1':"#212529",
        'text2':"#343A40",
        'text3':"#495057",
        'text4':"#6C757D",
        'inputgray':"#F4F4F4",
        'white':"#FFFFFF",
        'green':'green'
      
      },

    },
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
