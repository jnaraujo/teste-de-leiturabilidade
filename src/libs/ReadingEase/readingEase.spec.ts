import { expect, describe, it } from "vitest";

import { calculateFleschReading, easeToLabel } from ".";
import { countSyllables, getWords, splitPhrases } from "./helper";

describe("calculateFleschReading", () => {
  it("empty text", () => {
    const emptyTextTest = calculateFleschReading("");
    expect(emptyTextTest).toEqual({
      words: 0,
      sentences: 0,
      syllables: 0,
      index: 0,
      chars: 0,
    });
  });

  it("text with only one word", () => {
    const oneWordTest = calculateFleschReading("teste");
    expect(oneWordTest.sentences).toEqual(1);
    expect(oneWordTest.words).toEqual(1);
    expect(oneWordTest.syllables).toEqual(2);
    expect(oneWordTest.chars).toEqual(5);
    expect(oneWordTest.index).toBeDefined();
  });

  it("text with only one sentence", () => {
    const oneSentenceTest = calculateFleschReading(
      "A mentira é muita vezes tão involuntária como a respiração.",
    );
    expect(oneSentenceTest.sentences).toEqual(1);
    expect(oneSentenceTest.words).toEqual(10);
    expect(oneSentenceTest.syllables).toEqual(22);
    expect(oneSentenceTest.chars).toEqual(59);
    expect(oneSentenceTest.index).toBeDefined();
  });

  it("100% result", () => {
    const oneSentenceTest = calculateFleschReading("bom dia");
    expect(oneSentenceTest.index).toEqual(100);
  });

  it("text with multiple sentences", () => {
    const multipleSentencesTest = calculateFleschReading(
      "As pessoas têm medo das mudanças.",
    );
    expect(multipleSentencesTest.sentences).toEqual(1);
    expect(multipleSentencesTest.words).toEqual(6);
    expect(multipleSentencesTest.syllables).toEqual(11);
    expect(multipleSentencesTest.index).toBeCloseTo(87.6, 1);
  });

  describe("getWords", () => {
    it("empty text", () => {
      const words = getWords("");
      expect(words.length).toEqual(0);
    });

    it("text with only one word", () => {
      const words = getWords("teste");
      expect(words.length).toEqual(1);
    });

    it("text with multiple words", () => {
      const words = getWords("teste teste");
      expect(words.length).toEqual(2);
    });

    it("text with multiple words and special characters", () => {
      const words = getWords("teste teste teste!");
      expect(words.length).toEqual(3);
    });

    it("should remove break line chars", () => {
      const words = getWords(
        "teste \n\n\n\nteste \n\n\n\n\n\n\nteste! \n\n\n\n",
      );
      expect(words.length).toEqual(3);
    });
  });

  describe("countSyllables", () => {
    it("empty text", () => {
      const syllables = countSyllables([]);
      expect(syllables).toEqual(0);
    });

    it("text with only one word", () => {
      const syllables = countSyllables(["abacate"]);
      expect(syllables).toEqual(4);
    });

    it("text with multiple words", () => {
      const syllables = countSyllables(["abacate", "melancia"]);
      expect(syllables).toEqual(7);
    });

    it("text with multiple words and special characters", () => {
      const syllables = countSyllables(["abacate", "melancia!"]);
      expect(syllables).toEqual(7);
    });
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

describe("splitPhrases", () => {
  it("empty text", () => {
    const emptyTextTest = splitPhrases("");
    expect(emptyTextTest).toEqual([]);
  });

  it("text with only one phrase", () => {
    const onePhraseTest = splitPhrases("teste");
    expect(onePhraseTest).toEqual(["teste"]);
  });

  it("text with multiple phrases", () => {
    const multiplePhrasesTest = splitPhrases("teste. teste");
    expect(multiplePhrasesTest).toEqual(["teste.", "teste"]);
  });

  it("text with multiple phrases and special characters", () => {
    const multiplePhrasesTest = splitPhrases("teste! teste.");
    expect(multiplePhrasesTest).toEqual(["teste!", "teste."]);
  });

  it("text with multiple phrases and special characters", () => {
    const multiplePhrasesTest = splitPhrases("teste! teste. teste?");
    expect(multiplePhrasesTest).toEqual(["teste!", "teste.", "teste?"]);
  });

  it("text with multiple phrases and break lines", () => {
    const multiplePhrasesTest = splitPhrases("teste! teste. \n\n\n\nteste?");
    expect(multiplePhrasesTest).toEqual(["teste!", "teste.", "teste?"]);
  });

  it("text with multiple phrases and break lines", () => {
    const multiplePhrasesTest = splitPhrases("teste! teste \n\n\n\nteste?");

    expect(multiplePhrasesTest).toEqual(["teste!", "teste", "teste?"]);
  });
});
