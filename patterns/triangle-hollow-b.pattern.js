export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let diagonal = i === j
      let horizontal = i === 0
      let vertical = j === size - 1

      let clause = diagonal || horizontal || vertical
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
