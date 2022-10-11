const truncateString = (str: string, num: number, repl?: string) => {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr + (repl ? repl : "...");
  } else {
    return str;
  }
};

export default truncateString;
