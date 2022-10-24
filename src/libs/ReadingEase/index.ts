import SilabaJS from "./silaba.js";

export function calculateFleschReading(text: string) {
  const words = String(text)
    .replace(/\n/g, " ")
    .replace(/,/g, "")
    .replace(/!/g, "")
    .replace(/\?/g, "")
    .replace(/;/g, "")
    .replace(/\r/g, "")
    .split(" ")
    .filter((word) => word !== "");

  const totalSentences = String(text)
    .replace(/\n/g, ".")
    .replace(/\r/g, "")
    .split(".")
    .filter((word) => word !== "." && word !== "");

  let totalSyllables = 0;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const ts = (SilabaJS.getSilabas(word) as any).numeroSilaba;
    totalSyllables += ts;
  }

  const formula =
    248.835 -
    1.015 * (words.length / totalSentences.length) -
    84.6 * (totalSyllables / words.length);

  return {
    words: words.length,
    sentences: totalSentences.length,
    syllables: totalSyllables,
    result: Math.max(Math.min(formula, 100), 0) || 0,
  };
}

export function easeToLabel(ease: number) {
  if (ease > 75) return "um estudante do 1º ao 5º ano";
  if (ease > 50) return "um estudante do 6º ao 9º ano";
  if (ease > 25) return "um estudante do ensino médio";
  return "um estudante universitário";
}
