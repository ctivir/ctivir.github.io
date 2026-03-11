module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        bg:       "#FDFBF7",
        primary:  "#C05E2B",
        accent:   "#D4A017",
        text: {
          DEFAULT: "#2D2D2D",
          heading: "#1B4332"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans:  ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
