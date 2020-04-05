import { LogicFunction } from '../types'

export function createGitHubLink(name: string) {
  return `https://github.com/grikomsn/console-patterns/blob/master/patterns/${name}`
}

export function createPattern(logic: LogicFunction) {
  return {
    test: (size: number) => {
      let out = ''

      function newline() {
        out += '\n'
      }

      function print(s: string) {
        out += s
      }

      logic({ newline, print, size })
      return out
    },
  }
}
