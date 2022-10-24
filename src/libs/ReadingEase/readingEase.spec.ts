import { expect, describe, it } from "vitest";

import { calculateFleschReading, easeToLabel } from ".";

describe("calculateFleschReading", () => {
  it("empty text", () => {
    const emptyTextTest = calculateFleschReading("");
    expect(emptyTextTest).toEqual({
      words: 0,
      sentences: 0,
      syllables: 0,
      result: 0,
    });
  });

  it("text with only one word", () => {
    const oneWordTest = calculateFleschReading("teste");
    expect(oneWordTest.sentences).toEqual(1);
    expect(oneWordTest.words).toEqual(1);
    expect(oneWordTest.syllables).toEqual(2);
    expect(oneWordTest.result).toBeDefined();
  });

  it("text with only one sentence", () => {
    const oneSentenceTest = calculateFleschReading(
      "A mentira é muita vezes tão involuntária como a respiração."
    );
    expect(oneSentenceTest.sentences).toEqual(1);
    expect(oneSentenceTest.words).toEqual(10);
    expect(oneSentenceTest.syllables).toEqual(22);
    expect(oneSentenceTest.result).toBeDefined();
  });

  it("100% result", () => {
    const oneSentenceTest = calculateFleschReading("bom dia");
    expect(oneSentenceTest.result).toEqual(100);
  });

  it("text with multiple sentences", () => {
    const multipleSentencesTest = calculateFleschReading(
      "As pessoas têm medo das mudanças. Eu tenho medo que as coisas nunca mudem."
    );
    expect(multipleSentencesTest.sentences).toEqual(2);
    expect(multipleSentencesTest.words).toEqual(14);
    expect(multipleSentencesTest.syllables).toEqual(24);
    expect(multipleSentencesTest.result).toBeCloseTo(96.5, 0);
  });
});

describe("easeToLabel", () => {
  it("100% result", () => {
    const oneSentenceTest = easeToLabel(100);
    expect(oneSentenceTest).toEqual("um estudante do 1º ao 5º ano");
  });

  it("75% result", () => {
    const oneSentenceTest = easeToLabel(75);
    expect(oneSentenceTest).toEqual("um estudante do 6º ao 9º ano");
  });

  it("50% result", () => {
    const oneSentenceTest = easeToLabel(50);
    expect(oneSentenceTest).toEqual("um estudante do ensino médio");
  });

  it("0% result", () => {
    const oneSentenceTest = easeToLabel(0);
    expect(oneSentenceTest).toEqual("um estudante universitário");
  });
});
