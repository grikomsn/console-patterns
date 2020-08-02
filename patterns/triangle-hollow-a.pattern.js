export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      let diagonal = i === j
      let horizontal = i === size - 1
      let vertical = j === 0

      let clause = diagonal || horizontal || vertical
      print(clause ? "* " : "  ")
    }
    newline()
  }
}
