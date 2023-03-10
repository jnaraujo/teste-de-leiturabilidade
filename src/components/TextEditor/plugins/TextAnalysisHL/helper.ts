/**
 * Split by punctuation followed by space. Supports: . ! ?
 * @param text
 * @returns
 */
export function splitPhrases(text: string) {
  const regex = /(?<=[.?!])\s/g;
  return text.split(regex);
}
