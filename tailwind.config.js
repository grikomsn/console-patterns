const defaultTheme = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    minWidth: (theme) => ({
      ...defaultTheme.theme.minWidth,
      ...theme('maxWidth'),
    }),
    fontFamily: {
      mono: ['Cousine', ...defaultTheme.theme.fontFamily.mono],
      sans: ['Fira Sans', ...defaultTheme.theme.fontFamily.sans],
    },
  },
}
