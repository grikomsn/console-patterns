export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let ltrb = i === j // ↘
      let rtlb = j === size - i - 1 // ↙
      let top = i === 0
      let bottom = i === size - 1
      let clause = ltrb || rtlb || bottom || top
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
