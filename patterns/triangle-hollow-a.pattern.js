export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      let clause = i === j || i === size - 1 || j === 0
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
