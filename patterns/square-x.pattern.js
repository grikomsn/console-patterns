export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let top = i === 0
      let bottom = i === size - 1
      let left = j === 0
      let right = j === size - 1

      let /* ↘ */ ltrb = i === j
      let /* ↙ */ rtlb = j === size - i - 1

      let square = top || bottom || left || right
      let x = ltrb || rtlb

      print(square || x ? "* " : "  ")
    }
    newline()
  }
}
