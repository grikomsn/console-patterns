export default ({ newline, print, size }) => {
  for (let i = 0; i < 2 * size - 1; i++) {
    for (let j = 0; j < 2 * size - 1; j++) {
      let horizontalCenter = i === size - 1
      let verticalCenter = j === size - 1
      let diagonal1 = j === i
      let diagonal2 = j === 2 * size - i - 2
      let clause = verticalCenter || diagonal1 || diagonal2 || horizontalCenter
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
