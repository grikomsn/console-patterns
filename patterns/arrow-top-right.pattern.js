export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let line = i === size - j - 1
      let head = j > i - 1

      print(line || head ? '* ' : '  ')
    }
    newline()
  }
}
