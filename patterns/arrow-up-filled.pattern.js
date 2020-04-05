export default ({ newline, print, size }) => {
  for (let i = 0; i < 2 * size - 1; i++) {
    let k = i
    if (i >= size) {
      k = size - i
    }
    for (let j = 0; j < 2 * size - 1; j++) {
      let verticalCenter = j === size - 1
      let clause = (j >= size - k - 1 && j <= size + k - 1) || verticalCenter
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
