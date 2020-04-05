export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const clause = j === size - i - 1 || i === size - 1 || j === size - 1
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
