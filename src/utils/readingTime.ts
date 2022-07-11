export const getReadingTime = (text: string) => {
  const readingTimeInMin = String(text).split(" ").length / 170;
  return Math.ceil(Number(readingTimeInMin));
};

export function getReadingTimeByWords(words: number) {
  const readingTimeInMin = words / 170;
  return readingTimeInMin * 60;
}

export function secondsToHMS(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(
      2,
      "0"
    )}m ${String(secs).padStart(2, "0")}s`;
  }
  if (minutes > 0) {
    return `${String(minutes).padStart(2, "0")}m ${String(secs).padStart(
      2,
      "0"
    )}s`;
  }
  return `${String(secs).padStart(2, "0")}s`;
}
