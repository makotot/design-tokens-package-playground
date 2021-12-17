module.exports = {
  source: ['./tokens/**/*.json'],
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/module',
          destination: 'tokens.js',
        },
        {
          format: 'typescript/module-declarations',
          destination: 'tokens.d.ts',
        },
      ],
    },
    json: {
      buildPath: 'dist/',
      files: [
        {
          format: 'json',
          destination: 'tokens.json',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/',
      files: [
        {
          format: 'scss/variables',
          destination: 'tokens.scss',
        },
      ],
    },
  },
}