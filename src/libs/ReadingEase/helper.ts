import silabaJS from "./silaba";

export function getWords(text: string) {
  const words = text.replace(/\n\r,!?;/g, " ").split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      words.splice(i, 1);
      i--;
    }
  }

  return words;
}

export function countSyllables(words: string[]) {
  let totalSyllables = 0;

  for (let word of words) {
    const silabas = (silabaJS.getSilabas(word) as any).numeroSilaba;
    totalSyllables += silabas;
  }

  return totalSyllables;
}

/**
 * Calculate the Flesch Ease score for a given text
 * @param words - number of words in the text
 * @param sentences - number of sentences in the text
 * @param syllables - number of syllables in the text
 * @return Flesch Ease score
 */
export function calculateFleschEase(
  words: number,
  sentences: number,
  syllables: number,
) {
  return 248.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
}

/**
 * Calculate the Flesch Reading score for a given text
 * @param Flesch Reading score
 */
export function calculateResult(fleschEase: number) {
  if (!fleschEase) return 0;
  const min = Math.min(fleschEase, 100);
  return Math.max(min, 0);
}

function isPunctuation(char: string) {
  return /[.?!]/.test(char);
}

function checkLookbehindSupport() {
  try {
    new RegExp("(?<=a)b");
    return true;
  } catch (e) {
    return false;
  }
}

const DOES_BROWSER_SUPPORT_LOOKBEHIND = checkLookbehindSupport();

function lookbehindSplit(text: string) {
  const regex = /(?<=[.?!])\s/g;
  const tokens = text.split(regex);
  return tokens.filter((phrase) => phrase.length > 0);
}

function bruteSplit(text: string) {
  const regex = /([.?!])/g;
  const tokens = text.split(regex);
  const phrases: string[] = [];
  let phrase = "";

  tokens.forEach((token) => {
    if (token.length === 0) return;
    token = token.trim();

    if (isPunctuation(token)) {
      phrase += token;
    } else {
      if (phrase.length > 0) {
        phrases.push(phrase.trim());
      }
      phrase = token;
    }
  });

  if (phrase.length > 0) phrases.push(phrase.trim());

  return phrases;
}

/**
 * Split by punctuation followed by space. Supports: . ! ? \r \n
 * @param text
 * @returns
 */
export function splitPhrases(text: string) {
  // lookbehind is not supported in Safari
  try {
    return lookbehindSplit(text);
  } catch (e) {
    return bruteSplit(text);
  }
}
