const plugin = require("tailwindcss");

const components = {
  ".bg-gradient-body": {
    "background-image": "linear-gradient(#014361, #011c2f)",
  },
};

module.exports = {
  darkMode: "class",
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    backgroundGradient: {
      body: "linear-gradient(#014361, #011c2f)",
    },
  },
  plugins: [
    // @ts-ignore node
    plugin(({ addComponents }) => {
      addComponents(components);
    }),
  ],
};
