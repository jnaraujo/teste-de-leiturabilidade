import SilabaJS from "./silaba.js";

export function calculateFleschReading(text: string) {
  const words = getWords(text);
  const totalSentences = getSentences(text).length;
  const totalSyllables = getSyllablesCount(words);

  return {
    words: words.length,
    sentences: totalSentences,
    syllables: totalSyllables,
    result:
      Math.max(
        Math.min(
          calculateFleschEase(words.length, totalSentences, totalSyllables),
          100
        ),
        0
      ) || 0,
  };
}

function getWords(text: string) {
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

function getSentences(text: string) {
  return String(text)
    .replace(/\n/g, ".")
    .replace(/\r/g, "")
    .split(".")
    .filter((word) => word !== "." && word !== "");
}

function getSyllablesCount(words: string[]) {
  let totalSyllables = 0;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    totalSyllables += (SilabaJS.getSilabas(word) as any).numeroSilaba;
  }

  return totalSyllables;
}

function calculateFleschEase(
  words: number,
  sentences: number,
  syllables: number
) {
  return 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
}

export function easeToLabel(ease: number) {
  if (ease > 75) return "um estudante do 1º ao 5º ano";
  if (ease > 50) return "um estudante do 6º ao 9º ano";
  if (ease > 25) return "um estudante do ensino médio";
  return "um estudante universitário";
}
