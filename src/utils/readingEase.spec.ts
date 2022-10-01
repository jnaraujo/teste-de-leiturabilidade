import { expect, describe, it } from "vitest";

import { easeResultToExample } from "./readingEase";

describe("easeResultToExample", () => {
  it("um estudante do 1º ao 5º ano", () => {
    expect(easeResultToExample(100)).toEqual("um estudante do 1º ao 5º ano");
  });

  it("um estudante do 6º ao 9º ano", () => {
    expect(easeResultToExample(60)).toEqual("um estudante do 6º ao 9º ano");
  });

  it("um estudante do ensino médio", () => {
    expect(easeResultToExample(40)).toEqual("um estudante do ensino médio");
  });

  it("um estudante universitário", () => {
    expect(easeResultToExample(20)).toEqual("um estudante universitário");
  });
});
