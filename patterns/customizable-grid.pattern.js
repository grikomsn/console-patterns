export default ({ newline, print, size }) => {
  let hspacing = 2
  let vspacing = 2

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let horizontal = j < size && j % hspacing == 0
      let vertical = i < size && i % vspacing == 0

      print(horizontal && vertical ? '* ' : '  ')
    }
    newline()
  }
}
