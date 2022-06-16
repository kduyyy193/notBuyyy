module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackRgba1: "rgba(0,0,0,0.25)",
        textActive: "rgb(220 38 38)",
      },
      backgroundColor: {
        bgActive: "rgb(254 202 202 )",
      },
      keyframes: {
        Rotate3: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" },
        },
      },
      animation: {
        Rotate3: "Rotate3 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
