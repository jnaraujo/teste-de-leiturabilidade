import {
  calculateFleschEase,
  calculateResult,
  countSyllables,
  getSentences,
  getWords,
} from "./helper";

export function calculateFleschReading(text: string) {
  const words = getWords(text);
  const totalSentences = getSentences(text).length;
  const totalSyllables = countSyllables(words);

  return {
    words: words.length,
    sentences: totalSentences,
    syllables: totalSyllables,
    result: calculateResult(
      calculateFleschEase(words.length, totalSentences, totalSyllables)
    ),
  };
}

export function easeToLabel(ease: number) {
  if (ease > 75) return "um estudante do 1º ao 5º ano";
  if (ease > 50) return "um estudante do 6º ao 9º ano";
  if (ease > 25) return "um estudante do ensino médio";
  return "um estudante universitário";
}
