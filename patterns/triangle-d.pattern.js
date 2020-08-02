export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      print(j >= size - i - 1 ? "* " : "  ")
    }
    newline()
  }
}
