/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      "slide-up": {
        "0%": { transform: "translateY(100%)", opacity: "0%" },
        "100%": { transform: "translateY(0%)", opacity: "100%" },
      },
      "slide-in": {
        "0%": { transform: "translateX(100%)", opacity: "0%" },
        "100%": { transform: "translateX(0%)", opacity: "100%" },
      },
      "slide-out": {
        "0%": { transform: "translateX(0%)", opacity: "100%" },
        "100%": { transform: "translateX(100%)", opacity: "0%" },
      },
    },
    animation: {
      "slide-in": "slide-in 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "slide-out":
        "slide-out 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "slide-up": "slide-up 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
