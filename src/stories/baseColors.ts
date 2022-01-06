import tokens from '../../lib/tokens'

const getTypedObjectKeys = <T>(obj: T) => Object.keys(obj) as Array<keyof typeof obj>

export const palette = () => {
  const baseColors = tokens.global.color.base
  const baseColorKeys = getTypedObjectKeys(baseColors)

  const res = baseColorKeys.map((name) => {
    const currentColor = baseColors[name]
    const currentColorKeys = getTypedObjectKeys(currentColor)

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
