import {
  calculateFleschEase,
  calculateResult,
  countSyllables,
  getWords,
  splitPhrases,
} from "./helper";

/**
 * Calculate the Flesch Reading score for a given text
 * @param phrase - text to be analyzed
 * @return Flesch Reading score
 * @example
 * const result = calculateFleschReading("A vida é bela.");
 * console.log(result);
 * // {
 * //   words: 4,
 * //   sentences: 1,
 * //   syllables: 6,
 * //   result: 100
 * // }
 **/
export function calculateFleschReading(phrase: string) {
  if (!phrase)
    return {
      words: 0,
      sentences: 0,
      syllables: 0,
      result: 0,
    };

  const words = getWords(phrase);
  const totalSyllables = countSyllables(words);

  return {
    words: words.length,
    sentences: 1,
    syllables: totalSyllables,
    result: calculateResult(
      calculateFleschEase(words.length, 1, totalSyllables),
    ),
  };
}

export function calculateFleschReadingFromText(text: string) {
  const phrases = splitPhrases(text);

  const result = {
    index: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  };

  for (let i = 0; i < phrases.length; i++) {
    const phraseAnalyses = calculateFleschReading(phrases[i]);
    result.syllables += phraseAnalyses.syllables;
    result.words += phraseAnalyses.words;
    result.sentences += phraseAnalyses.sentences;
  }

  result.index = calculateFleschEase(
    result.words,
    result.sentences,
    result.syllables,
  );

  return result;
}

export function easeToLabel(ease: number) {
  if (ease > 75) return "um estudante do 1º ao 5º ano";
  if (ease > 50) return "um estudante do 6º ao 9º ano";
  if (ease > 25) return "um estudante do ensino médio";
  return "um estudante universitário";
}
