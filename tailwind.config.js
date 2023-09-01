const plugin = require("tailwindcss");

const components = {};

module.exports = {
  theme: {
    extend: {
      colors: {
        p1: "#785a28",
        p2: "#cdbe91",
      },
    },
  },
  darkMode: "class",
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  plugins: [
    // @ts-ignore node
    plugin(({ addComponents }) => {
      addComponents(components);
    }),
  ],
};
