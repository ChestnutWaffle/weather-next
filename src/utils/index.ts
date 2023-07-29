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
