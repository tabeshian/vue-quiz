const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
    },
    colors: {
      primary: colors.indigo,
      secondary: colors.stone,
      success: colors.lime,
      error: colors.orange,
      gray: colors.stone,
      white: colors.stone[100],
      back: colors.stone[900],
    },
    extend: {
      // transitionDelay: {
      //   0: "0ms",
      //   500: "500ms",
      //   1000: "1000ms",
      //   1500: "1500ms",
      //   2000: "2000ms",
      // },
      fontSize: {
        sm: "clamp(1rem, 0.8571rem + 0.7143vw, 1.2rem)",
        md: "clamp(1rem, 0.7727rem + 1.5152vw, 1.5rem)",
        lg: "clamp(1.5rem, 1.2727rem + 1.5152vw, 2rem)",
        300: "clamp(0.8rem, 0.5857rem + 1.0714vw, 1.1rem)",
        400: "clamp(0.88rem, 0.83rem + 0.24vw, 1rem)",
        500: "clamp(1.09rem, 1rem + 0.47vw, 1.33rem)",
        600: "clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)",
        700: "clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem)",
        800: "clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)",
        900: "clamp(2.67rem, 2.07rem + 3vw, 4.21rem)",
        1000: "clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
