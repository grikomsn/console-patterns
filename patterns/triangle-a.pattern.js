export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      print("* ")
    }
    newline()
  }
}
