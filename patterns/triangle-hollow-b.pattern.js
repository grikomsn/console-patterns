export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let clause = i === j || i === 0 || j === size - 1
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
