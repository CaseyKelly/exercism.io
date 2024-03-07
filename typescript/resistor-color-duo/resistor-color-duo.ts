export function decodedValue(colors: string[]) {
  const colorMap: { [color: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }

  const limitedColors = colors.slice(0, 2)

  const resultString = limitedColors.reduce(
    (accumulator, currentValue, index) => {
      return index == 0
        ? String(colorMap[currentValue])
        : accumulator + String(colorMap[currentValue])
    },
    ''
  )

  return Number(resultString)
}
