import { LogicFunction } from "@/types";

export function createPattern(logic: LogicFunction) {
  return {
    test: (size: number) => {
      let out = "";

      function newline() {
        out += "\n";
      }

      function print(s: string) {
        out += s;
      }

      try {
        logic({ newline, print, size });
      } catch (error) {
        return `${error as ReferenceError}`;
      }

      return out;
    },
  };
}
