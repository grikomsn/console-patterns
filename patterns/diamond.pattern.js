export default ({ newline, print, size }) => {
  for (let i = 0; i < size * 2 - 1; i++) {
    for (let j = 0; j < size * 2 - 1; j++) {
      let lt /* ↘ */ = j >= size - i - 1
      let lb /* ↗ */ = j > i - size
      let rt /* ↙ */ = j <= size + i - 1
      let rb /* ↖ */ = j < size * 3 - i - 2

      print(lt && lb && rt && rb ? '* ' : '  ')
    }
    newline()
  }
}
