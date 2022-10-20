/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { useWindowSize } from "react-use";

import useLeiturabilidade from "../../hooks/useLeiturabilidade";

import {
  getReadingTimeByWords,
  secondsToHMS,
  easeResultToExample,
} from "../../utils";

import { RdResult } from "./styles";

interface ResultBoxProps {
  onImportPage?: (value: string) => void;
}

const ResultBox: React.FC<ResultBoxProps> = ({ onImportPage }) => {
  const sliderRef = useRef<any>(null);
  const externalPageUrlRef = useRef<any>(null);

  const { width, height } = useWindowSize();

  const { ease } = useLeiturabilidade();
  const [sliderSize, setSliderSize] = useState(100);

  function base100ToSlideBarSize(value: number) {
    if (!sliderRef.current) return 0;

    const sliderWidth = sliderRef.current?.offsetWidth;
    const formula = value * (sliderWidth / 100);

    return Math.max(Math.min(formula, sliderWidth), 5);
  }

  const handleImportClick = () => {
    if (onImportPage && externalPageUrlRef.current) {
      onImportPage(externalPageUrlRef.current?.value || "");
    }
  };

  useEffect(() => {
    setSliderSize(base100ToSlideBarSize(ease.index));
  }, [width, height, ease]);

  return (
    <RdResult>
      <p>
        Seu texto está no nível de leitura de{" "}
        <span id="rd_exmlp">{easeResultToExample(ease.index)}.</span>
      </p>
      <div className="ease_bar">
        <div className="slider" style={{ left: `${sliderSize}px` }} />
        <div className="cont">
          <div className="row" ref={sliderRef}>
            <div className="col" />
            <div className="col" />
            <div className="col" />
            <div className="col" />
            <div className="col" />
          </div>
        </div>
      </div>
      <ul>
        <li>
          Muito
          <br />
          <span>difícil</span>
        </li>
        <li>Médio</li>
        <li>
          Muito
          <br />
          <span>fácil</span>
        </li>
      </ul>
      <p>
        <br />
        <strong
          style={{
            fontSize: "20px",
          }}
        >
          Mais sobre seu texto:
        </strong>
        <br />
        Tempo de leitura:{" "}
        <strong>{secondsToHMS(getReadingTimeByWords(ease.words))}</strong>
        <br />
        Número de palavras: <strong>{ease.words}</strong>
        <br />
        Número de frases: <strong>{ease.sentences}</strong>
        <br />
      </p>
      <br />
      <div className="importExternalPage">
        <h3>Deseja importar o conteúdo de uma página externa?</h3>
        <input type="url" ref={externalPageUrlRef} />
        <button onClick={handleImportClick} type="submit">
          Importar página
        </button>
        <p>* Serviços suportados: Notion, Google Docs</p>
      </div>
    </RdResult>
  );
};

export default ResultBox;
