import { describe, expect, it } from "vitest";
import { splitPhrases } from "./helper";

describe("textAnalysisHL helper", () => {
  it("should splitPhrases", () => {
    let input = "This is a test. This is another test.";
    expect(splitPhrases(input)).toEqual([
      "This is a test.",
      "This is another test.",
    ]);

    input = "This is a test! This is another test. Is this a third test?";
    expect(splitPhrases(input)).toEqual([
      "This is a test!",
      "This is another test.",
      "Is this a third test?",
    ]);

    input = "Is this a test? Is this another test? Is this a third test!";
    expect(splitPhrases(input)).toEqual([
      "Is this a test?",
      "Is this another test?",
      "Is this a third test!",
    ]);

    input =
      "Is this a test... Yeah! This is another test. Is this a third test?";
    expect(splitPhrases(input)).toEqual([
      "Is this a test...",
      "Yeah!",
      "This is another test.",
      "Is this a third test?",
    ]);

    input =
      "Is this a test... Yeah! This is another test. Is this a third test? ";
    expect(splitPhrases(input)).toEqual([
      "Is this a test...",
      "Yeah!",
      "This is another test.",
      "Is this a third test?",
    ]);
  });
});
