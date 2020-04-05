export type LogicFunction = (args: {
  newline: () => void
  print: (s: string) => void
  size: number
  [k: string]: any
}) => void
