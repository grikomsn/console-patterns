export default ({ newline, print, size }) => {
  for (let i = 0; i < size * 2 - 1; i++) {
    let rt /* ↙ */ = size + i
    let rb /* ↖ */ = size * 3 - i - 2
    let limit = i < size ? rt : rb

    for (let j = 0; j < limit; j++) {
      let lt /* ↘ */ = j >= size - i - 1
      let lb /* ↗ */ = j > i - size

      print(lt && lb ? "* " : "  ")
    }
    newline()
  }
}
