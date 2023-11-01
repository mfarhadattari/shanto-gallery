/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playpen-sans": ["Playpen Sans", "cursive"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
