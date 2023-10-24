/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

// export const content = [
//   "./index.html",
//   "./src/**/*.{html,js,ts,tsx,jsx}",
//   "./node_modules/tw-elements/dist/js/**/*.js",
// ];
// export const plugins = [require("tw-elements/dist/plugin.cjs")];
// export const darkMode = "class";

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
});
