// https://nextjs.org/docs/advanced-features/customizing-postcss-config
// https://github.com/zeit/next.js/blob/master/errors/postcss-shape.md

const purgecss = {
  ['@fullhuman/postcss-purgecss']: {
    content: ['src/**/*.tsx'],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelist: ['html', 'body'],
  },
}

module.exports = {
  plugins: {
    ['tailwindcss']: {},
    ['postcss-preset-env']: { stage: 1 },

    ...(process.env.NODE_ENV === 'production' ? purgecss : {}),
  },
}
