export function getDateNTime(timeZone: string, unix?: number) {
  const datetime = new Date(unix ? unix * 1000 : Date.now());
  const date = datetime.toLocaleDateString("en-US", {
    timeZone,
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = datetime.toLocaleTimeString("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return { date, time };
}

export function escape_string(str: string) {
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
    switch (char) {
      case "\0":
        return "\\0";
      case "\x08":
        return "\\b";
      case "\x09":
        return "\\t";
      case "\x1a":
        return "\\z";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case '"':
      case "'":
      case "\\":
      case "%":
        return "\\" + char; // prepends a backslash to backslash, percent,
      // and double/single quotes
      default:
        return char;
    }
  });
}
