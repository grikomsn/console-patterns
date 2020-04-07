export default ({ newline, print, size }) => {
  for (let i = 0; i < 2 * size - 1; i++) {
    for (let j = 0; j < 2 * size - 1; j++) {
      let h /* ─ */ = i === size - 1
      let v /* │ */ = j === size - 1
      let d1 /* ↘ */ = i === j
      let d2 /* ↙ */ = j === 2 * size - i - 2

      print(h || v || d1 || d2 ? '* ' : '  ')
    }
    newline()
  }
}
