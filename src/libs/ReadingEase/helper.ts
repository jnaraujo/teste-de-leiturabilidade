import silabaJS from "./silaba";

export function getWords(text: string) {
  return String(text)
    .replace(/\n/g, " ")
    .replace(/,/g, "")
    .replace(/!/g, "")
    .replace(/\?/g, "")
    .replace(/;/g, "")
    .replace(/\r/g, "")
    .split(" ")
    .filter((word) => word !== "");
}

export function getSentences(text: string) {
  return String(text)
    .replace(/\n/g, ".")
    .replace(/\r/g, "")
    .split(/[.!?]/)
    .filter((word) => word !== "." && word !== "");
}

export function countSyllables(words: string[]) {
  let totalSyllables = 0;

  for (let word of words) {
    totalSyllables += (silabaJS.getSilabas(word) as any).numeroSilaba;
  }

  return totalSyllables;
}

/**
 * Calculate the Flesch Ease score for a given text
 * @param words number of words in the text
 * @param sentences number of sentences in the text
 * @param syllables number of syllables in the text
 * @return Flesch Ease score
 */
export function calculateFleschEase(
  words: number,
  sentences: number,
  syllables: number
) {
  return 248.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
}

/**
 * Calculate the Flesch Reading score for a given text
 * @param Flesch Reading score
} */
export function calculateResult(fleschEase: number) {
  if (!fleschEase) return 0;
  const min = Math.min(fleschEase, 100);
  return Math.max(min, 0);
}
