

// const getColorAvg = (...colors) => {
//   let rgbColor = [],
//     result = []
//   colors.forEach(color => {
//     color = color.split``
//     for (val in color) {
//       if (parseInt(val) % 2 === 0) {
//         rgbColor.push(parseInt((color.slice(val, parseInt(val) + 2).join``).toString(), 16))
//       }
//     }
//   })
//   let rgbColor2 = rgbColor.splice(3)
//   for (i in rgbColor) {
//     result.push(parseInt((rgbColor[i] + rgbColor2[i]) / 2).toString(16))
//   }
//   console.log(`#${result.join``.toUpperCase()}`)
// }

const toRGB = colors => colors.map(color => color.split``)

const getColorAvg = (...colors) => {
  console.log(toRGB(colors))
}





getColorAvg('a1b2c3', 'BADAE5')