export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let line = i === j
      let head = i > size - j - 2

      print(line || head ? '* ' : '  ')
    }
    newline()
  }
}
