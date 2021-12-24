const StyleDictionary = require('style-dictionary').extend({
  source: ['./tokens.json'],
  platforms: {
    js: {
      buildPath: 'lib/',
      transforms: ['attribute/cti'],
      files: [
        {
          format: 'javascript/module',
          destination: 'tokens.js',
        },
        {
          format: 'custom/javascript/typescript-definition',
          destination: 'tokens.d.ts',
        },
      ],
    },
    css: {
      buildPath: 'lib/',
      transformGroup: 'css',
      files: [
        {
          format: 'css/variables',
          destination: 'tokens.css',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
})

StyleDictionary.registerFormat({
  name: 'custom/javascript/typescript-definition',
  formatter: ({ dictionary, platform, options, file }) => {
    return `declare const tokens: ${JSON.stringify(
      dictionary.tokens,
      null,
      2
    )}; export default tokens;`
  },
})

StyleDictionary.buildAllPlatforms()
