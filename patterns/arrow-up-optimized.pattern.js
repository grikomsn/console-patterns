export default ({ newline, print, size }) => {
  for (let i = 0; i < size * 2 - 1; i++) {
    let rt /* ↙ */ = size + i
    let rb /* ┌ */ = size
    let limit = i < size ? rt : rb

    for (let j = 0; j < limit; j++) {
      let head = j >= size - i - 1 && i < size
      let line = j === size - 1

      print(head || line ? '* ' : '  ')
    }
    newline()
  }
}
