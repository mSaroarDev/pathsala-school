/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        tiroBangla: ["tiro-bangla-regular", "sans-serif"],
      },
      colors: {
        brand: "#ff5800",
      },
    },
  },
  plugins: [require("daisyui")],
};
