import { IEase } from "../../context/LeiturabilidadeContext";

import * as ReadingEase from "../../libs/ReadingEase";

export const textExample = `
  <h1>Ei! Esse é um exemplo de título.</h1> 
  <p>
    Você poder escrever <b>qualquer texto</b> que quiser aqui. <br />
    Além disso, ainda pode importar textos de outros lugares!
  </p>
  <p>
    O texto que você escreve é analisado automaticamente.<br />
    Você pode ver o resultado na barra de ferramentas ao lado.
  </p>
  <blockquote>
    Você também pode formatar o texto com as ferramentas acima. :)
  </blockquote>
  <p>
    Se quiser saber mais sobre como funciona o site, tem mais conteúdo logo abaixo!
  </p>
`;

export const handleContentEase = (
  text: string,
  setEase: (obj: IEase) => void
) => {
  const textAnalyses = ReadingEase.calculateFleschReading(text);

  setEase({
    index: textAnalyses.result,
    syllables: textAnalyses.syllables,
    words: textAnalyses.words,
    sentences: textAnalyses.sentences,
  });
};

export const calculateReadingEase = (text: string) => {
  const textAnalyses = ReadingEase.calculateFleschReading(text);

  return textAnalyses.result;
};
