const StyleDictionary = require('style-dictionary').extend({
  source: ['./tokens.json'],
  platforms: {
    json: {
      buildPath: 'dist/',
      transforms: ['attribute/cti'],
      files: [
        {
          format: 'json',
          destination: 'tokens.json',
        },
        {
          format: 'custom/json-as-const',
          destination: 'tokens.json.d.ts',
        },
      ],
    },
    css: {
      buildPath: 'dist/',
      transformGroup: 'css',
      files: [
        {
          format: 'css/variables',
          destination: 'tokens.css',
          options: {
            outputReferences: true,
          }
        }
      ]
    }
  },
})

StyleDictionary.registerFormat({
  name: 'custom/json-as-const',
  formatter: ({ dictionary, platform, options, file }) => {
    return `declare const tokens: ${JSON.stringify(
      dictionary.tokens,
      null,
      2
    )}; export default tokens;`
  },
})

StyleDictionary.buildAllPlatforms()
