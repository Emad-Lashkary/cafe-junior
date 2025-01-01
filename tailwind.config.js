/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 10s linear infinite",
        fadeIn: "fadeIn 0.7s ease-in-out",
        fadeOut: "fadeOut 0.7s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-in-out",
        slideInLeftFast: "slideInLeft 0.5s ease-in-out",
        slideInRight: "slideInRight 1s ease-in-out",
        slideInRightFast: "slideInRight 0.5s ease-in-out",
        slideOutRight: "slideOutRight 1s ease-in-out",
        slideInUp: "slideInUp 1s ease-in-out",
        slideInDown: "slideInDown 1s ease-in-out",
        bounce: "bounce 2s infinite",
        bounceMini: "bounceMini 2s infinite",
        pulseFast: "pulse 0.75s infinite",
        zoomIn: "zoomIn 1s ease-in-out",
        zoomOut: "zoomOut 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translatey(-30px)", opacity: "0" },
          "100%": { transform: "translatey(0)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounceMini: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.5)", opacity: "0" },
        },
      },
      colors: {
        primary: {
          50: "#f7f5f0",
          100: "#e6dfd4",
          200: "#d5c9b8",
          300: "#c4b29b",
          400: "#b39c7f",
          500: "#a28563",
          600: "#897050",
          700: "#705a3d",
          800: "#574429",
          900: "#3e2f16",
          950: "#241b0b",
        },
        secondary: {
          50: "#eef2ff",
          100: "#d6e4ff",
          200: "#bcd6ff",
          300: "#92bbff",
          400: "#689fff",
          500: "#3e83ff",
          600: "#0055d4",
          700: "#0041a3",
          800: "#002d72",
          900: "#001941",
          950: "#000b21",
        },
      },
    },
  },
  plugins: [],
};
