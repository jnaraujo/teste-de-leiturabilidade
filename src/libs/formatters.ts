export function secondsToMS(d: number) {
  const m = Math.floor((d % 3601) / 60); // it is 3601 because we want to show 60:00 instead of 59:59
  const s = Math.floor((d % 3600) % 60);

  const mDisplay = m.toString().padStart(2, "0");
  const sDisplay = s.toString().padStart(2, "0");

  return `${mDisplay}:${sDisplay}`;
}

export function secondsToHMS(secs: number) {
  const days = Math.floor(secs / 86400);
  const hours = Math.floor((secs % 86400) / 3600);
  const minutes = Math.floor(((secs % 86400) % 3600) / 60);
  const seconds = Math.floor(((secs % 86400) % 3600) % 60);

  if (days > 0) {
    return `${days} dia(s) e ${hours} hora(s)`;
  }
  if (hours > 0) {
    return `${hours} hora(s) e ${minutes} minuto(s)`;
  }
  if (minutes > 0) {
    return `${minutes} minuto(s)`;
  }

  return `${seconds} segundo(s)`;
}
