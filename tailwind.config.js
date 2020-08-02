const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    minWidth: (theme) => ({
      ...defaultTheme.theme.minWidth,
      ...theme("maxWidth"),
    }),
    fontFamily: {
      mono: ["Cousine", ...defaultTheme.theme.fontFamily.mono],
      sans: ["Fira Sans", ...defaultTheme.theme.fontFamily.sans],
    },
  },
  variants: {},
  plugins: [],
};
