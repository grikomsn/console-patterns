export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let diagonal = j === size - i - 1 // ↙
      let horizontal = i === size - 1
      let vertical = j === size - 1

      let clause = diagonal || horizontal || vertical
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
