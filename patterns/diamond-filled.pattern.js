export default ({ newline, print, size }) => {
  for (let i = 0; i < 2 * size - 1; i++) {
    let k = i
    if (i >= size) {
      k = 2 * size - i - 2
    }
    for (let j = 0; j < 2 * size - 1; j++) {
      let clause = j >= size - k - 1 && j <= size + k - 1
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
