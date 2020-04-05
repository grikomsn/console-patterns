export default ({ newline, print, size }) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let topAndBottom = i === 0 || i === size - 1
      let leftAndRight = j === 0 || j === size - 1
      let clause = topAndBottom || leftAndRight
      print(clause ? '* ' : '  ')
    }
    newline()
  }
}
