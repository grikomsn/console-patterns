export default ({ newline, print, size }) => {
  for (let i = 0; i < size * 2 - 1; i++) {
    for (let j = 0; j < size * 2 - 1; j++) {
      let lt /* ↘ */ = j >= size - i - 1
      let rt /* ↙ */ = j <= size + i - 1
      let head = lt && rt && i < size
      let line = j === size - 1

      print(head || line ? "* " : "  ")
    }
    newline()
  }
}
