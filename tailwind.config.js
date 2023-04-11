/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      md: "900px",
      lg: "1100px",
      xl: "1536px",
    },
    extend: {
      colors: {
        custom: {
          mainPurple: "rgb(18,22,32)",
          darkPurple: "rgb(21, 25, 37)",
          lightPurple: "rgb(36,42,60)",
          bodyPurple: "rgb(19,22,32)",
          backPurple: "rgb(24,25,39)",
          icon: "rgb(59,67,107)",
          text: "rgb(100,108,148)",
          glowYellow: "rgb(255, 199, 1)",
          darkYellow: "rgb(44,40,29)",
          lightGray: "rgb(32,39,61)",
          blueGray: "rgb(64,65,124)",
          animateYellowA: "rgb(255,194,57)",
          animateYellowB: "rgb(241,162,41)",
          cardText: "rgb(139,152,169)",
          randomText: "rgb(71,90,118)",
          footerPurple: "rgb(15,18,27)",
        },
      },
      textShadow: {
        glow: "0 0 2px rgba(255, 220, 38, 0.8), 0 0 4px rgba(255, 220, 38, 0.6), 0 0 6px rgba(255, 220, 38, 0.4), 0 0 8px rgba(255, 220, 38, 0.3), 0 0 10px rgba(255, 220, 38, 0.2), 0 0 12px rgba(255, 220, 38, 0.1), 0 0 14px rgba(255, 220, 38, 0.05)",
        // other text shadow effects...
        // other text shadow effects...
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-textshadow"),
  ],
};
