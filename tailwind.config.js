/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}", //add for tailwinf config
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
