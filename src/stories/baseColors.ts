// @ts-nocheck
import tokens from '../../dist/tokens'

type BaseColorKey = keyof typeof tokens.color.base

export const palette = () => {
  const baseColors = tokens.color.base
  const baseColorKeys = Object.keys(baseColors) as BaseColorKey[]

  const res = baseColorKeys.map((name) => {
    const currentColor = baseColors[name]

    return Object.keys(currentColor).map((currentName) => {
      return {
        attributes: currentColor[currentName].attributes,
        value: currentColor[currentName].value,
      }
    })
  })
  console.log(res)
  return res
}