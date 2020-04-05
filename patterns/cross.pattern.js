export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let ltrb = i === j // ↘
      let rtlb = j === size - i - 1 // ↙
      print(ltrb || rtlb ? '* ' : '  ')
    }
    newline()
  }
}
