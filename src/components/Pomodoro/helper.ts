export function secondsToHms(d: number) {
  const m = Math.floor((d % 3601) / 60); // it is 3601 because we want to show 60:00 instead of 59:59
  const s = Math.floor((d % 3600) % 60);

  const mDisplay = m.toString().padStart(2, "0");
  const sDisplay = s.toString().padStart(2, "0");

  return `${mDisplay}:${sDisplay}`;
}
