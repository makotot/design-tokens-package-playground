import tokens from '../../dist/tokens.json'

type ColorLevel = keyof typeof tokens.global.base.red

export const palette = () => {
  const baseColors = tokens.global.base
  const baseColorKeys = Object.keys(baseColors) as 'red'[]

  const res = baseColorKeys.map((name) => {
    const currentColor = baseColors[name]
    const currentColorKeys = Object.keys(currentColor) as ColorLevel[]

    return currentColorKeys.map((currentName) => {
      return {
        attributes: currentColor[currentName].attributes,
        value: currentColor[currentName].value,
      }
    })
  })
  console.log({ res })
  return res
}
