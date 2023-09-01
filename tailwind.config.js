const plugin = require("tailwindcss");

const components = {};

module.exports = {
  darkMode: "class",
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  plugins: [
    // @ts-ignore node
    plugin(({ addComponents }) => {
      addComponents(components);
    }),
  ],
};
