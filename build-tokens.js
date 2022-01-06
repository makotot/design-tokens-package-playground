const sd = require('style-dictionary')
const {compiler, beautify} = require('flowgen')

const StyleDictionary = sd.extend({
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
        {
          format: 'custom/javascript/flowtype-definition',
          destination: 'tokens.js.flow',
        },
      ],
    },
  },
})

const generateTSTypeDefinition = (tokens) => {
  return `declare const tokens: ${JSON.stringify(
    tokens,
    null,
    2
  )}; export default tokens;`
}

StyleDictionary.registerFormat({
  name: 'custom/javascript/typescript-definition',
  formatter: ({ dictionary, platform, options, file }) => {
    return generateTSTypeDefinition(dictionary.tokens)
  },
})
StyleDictionary.registerFormat({
  name: 'custom/javascript/flowtype-definition',
  formatter: ({ dictionary, platform, options, file }) => {
    const tsTypeDefinition = generateTSTypeDefinition(dictionary.tokens)
    const flowdefinition = compiler.compileDefinitionString(tsTypeDefinition);

    return beautify(flowdefinition)
  },
})

StyleDictionary.buildAllPlatforms()
