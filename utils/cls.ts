// classNames replacement
const cls = (...args: any[]): string => {
  let res = "";

  for (const arg of args) {
    if (arg) {
      switch (typeof arg) {
        case "object":
          for (const key in arg) {
            if (typeof arg[key] === "function" ? arg[key]() : arg[key]) {
              res += ` ${key}`;
            }
          }
          break;
        case "function":
          const tmp = arg();
          if (tmp) {
            res += ` ${tmp}`;
          }
          break;
        default:
          if (arg) {
            res += ` ${arg}`;
          }
          break;
      }
    }
  }

  return res.trim();
};

export default cls;
