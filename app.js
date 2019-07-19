
//Imperitive
// const getColorAvg = (...colors) => {
//   let rgbColor = [],
//     result = []
//   colors.forEach(color => {
//     console.log(color)
//     color = color.split``
//     for (val in color) {
//       parse
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

//Functional?

const hexToRGB = colors => {
  return colors.map(color=> {
    return [color.slice(0,2), color.slice(2,4),color.slice(4)].map(val=> {
      parseInt(val,16)
    })
  })
}

const getAvgRGB = (color1,color2) => {
  return color1.map((val,ind) => {
    parseInt((val + color2[ind]) / 2)
  })
}

const calcHexAvg = (...colors) => {
  const newColor = getAvgRGB(...hexToRGB(colors))
  return `#${newColor.map(val=> {
    return val.toString(16)
  }).join("").toUpperCase()}`
}

// const hexToRGB = colors => colors.map(color=> [color.slice(0,2), color.slice(2,4),color.slice(4)].map(val=>parseInt(val,16)))
// const calcNewColor = (color1,color2) => color1.map((val,ind) => parseInt((val + color2[ind]) / 2))
// const getAvgColor = (...colors) => `#${calcNewColor(...hexToRGB(colors)).map(val=> val.toString(16)).join("").toUpperCase()}`

console.log(calcHexAvg('a1b2c3', 'BADA55'))