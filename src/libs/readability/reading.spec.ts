import { expect, describe, it } from "vitest";

import { fleschReadingEaseBR } from "./ReadingEase";

describe("fleschReadingEaseBR", () => {
  it("empty text", () => {
    const emptyTextTest = fleschReadingEaseBR("");
    expect(emptyTextTest).toEqual({
      result: 0,
      totalSyllables: 0,
      totalWords: 0,
      nTotalSentences: 0,
    });
  });

  it("text with only one word", () => {
    const oneWordTest = fleschReadingEaseBR("teste");
    expect(oneWordTest.nTotalSentences).toEqual(1);
    expect(oneWordTest.totalWords).toEqual(1);
    expect(oneWordTest.totalSyllables).toEqual(2);
    expect(oneWordTest.result).toBeDefined();
  });

  it("text with only one sentence", () => {
    const oneSentenceTest = fleschReadingEaseBR(
      "A mentira é muita vezes tão involuntária como a respiração."
    );
    expect(oneSentenceTest.nTotalSentences).toEqual(1);
    expect(oneSentenceTest.totalWords).toEqual(10);
    expect(oneSentenceTest.totalSyllables).toEqual(22);
    expect(oneSentenceTest.result).toBeDefined();
  });

  it("100% result", () => {
    const oneSentenceTest = fleschReadingEaseBR("bom dia");
    expect(oneSentenceTest.result).toEqual(100);
  });

  it("text with multiple sentences", () => {
    const multipleSentencesTest = fleschReadingEaseBR(
      "As pessoas têm medo das mudanças. Eu tenho medo que as coisas nunca mudem."
    );
    expect(multipleSentencesTest.nTotalSentences).toEqual(2);
    expect(multipleSentencesTest.totalWords).toEqual(14);
    expect(multipleSentencesTest.totalSyllables).toEqual(24);
    expect(multipleSentencesTest.result).toBeCloseTo(96.5, 0);
  });
});
