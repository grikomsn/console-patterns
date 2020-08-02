export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      let diagonal = j === size - i - 1 // ↙
      let horizontal = i === 0
      let vertical = j === 0

      let clause = diagonal || horizontal || vertical
      print(clause ? "* " : "  ")
    }
    newline()
  }
}
