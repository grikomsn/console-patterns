export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      const clause = j === size - i - 1 || i === 0 || j === 0
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
