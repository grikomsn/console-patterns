export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let top = i === 0
      let bottom = i === size - 1
      let left = j === 0
      let right = j === size - 1

      let clause = top || bottom || left || right
      print(clause ? "* " : "  ")
    }
    newline()
  }
}
