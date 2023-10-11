import { expect, describe, it } from "vitest";

import {
  getReadingTime,
  getReadingTimeByWords,
  secondsToHMS,
} from "./readingTime";

describe("getReadingTime", () => {
  it("some text", () => {
    const emptyTextTest = getReadingTime(
      "As pessoas têm medo das mudanças. Eu tenho medo que as coisas nunca mudem.",
    );
    expect(emptyTextTest).toEqual(1);
  });
});

describe("getReadingTimeByWords", () => {
  it("empty text", () => {
    const emptyTextTest = getReadingTimeByWords(0);
    expect(emptyTextTest).toEqual(0);
  });

  it("10 seconds", () => {
    const emptyTextTest = getReadingTimeByWords(28);
    expect(emptyTextTest).toBeCloseTo(10, 0);
  });

  it("1 minute", () => {
    const emptyTextTest = getReadingTimeByWords(170);
    expect(emptyTextTest).toBeCloseTo(60, 1);
  });

  it("2 minutes", () => {
    const emptyTextTest = getReadingTimeByWords(340);
    expect(emptyTextTest).toBeCloseTo(120, 1);
  });
});

describe("secondsToHMS", () => {
  it("empty text", () => {
    const emptyTextTest = secondsToHMS(0);
    expect(emptyTextTest).toEqual("00s");
  });

  it("10 seconds", () => {
    const emptyTextTest = secondsToHMS(10);
    expect(emptyTextTest).toEqual("10s");
  });

  it("1 minute", () => {
    const emptyTextTest = secondsToHMS(60);
    expect(emptyTextTest).toEqual("01m 00s");
  });

  it("2 minutes", () => {
    const emptyTextTest = secondsToHMS(120);
    expect(emptyTextTest).toEqual("02m 00s");
  });

  it("1 hour", () => {
    const emptyTextTest = secondsToHMS(3600);
    expect(emptyTextTest).toEqual("01h 00m 00s");
  });

  it("2 hours", () => {
    const emptyTextTest = secondsToHMS(7200);
    expect(emptyTextTest).toEqual("02h 00m 00s");
  });
});
