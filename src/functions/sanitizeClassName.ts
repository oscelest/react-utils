export function sanitizeClassName(...args: Argument[]): string {
  const result = [] as string[];
  for (let arg of args) {
    if (Array.isArray(arg)) {
      result.push(sanitizeClassName(...arg));
    }
    else if (arg) {
      const classes = arg.split(/\s+/);
      for (let className of classes) {
        while (className.length && !className[0].match(/[_a-z]/i)) {
          className = className.substring(1);
        }
        className = className.replace(/^[^_a-zA-Z0-9-]/g, "");
        result.push(className);
      }
    }
  }
  
  return result.join(" ");
}

type Argument = undefined | null | string | Argument[]
