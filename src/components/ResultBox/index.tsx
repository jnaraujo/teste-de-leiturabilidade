/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { easeToLabel } from "@/libs/ReadingEase";

import { useReadingStore } from "@/store/readingStore";
import { useConfigStore } from "@/store/configStore";

import { getReadingTimeByWords, secondsToHMS } from "../../utils";

import { Content, Container } from "./styles";
import Input from "../Input";

interface ResultBoxProps {
  onImportPage?: (value: string) => void;
}

const ResultBox: React.FC<ResultBoxProps> = ({ onImportPage }) => {
  const sliderRef = useRef<any>(null);
  const externalPageUrlRef = useRef<any>(null);
  const { config, setConfig } = useConfigStore();

  const { width, height } = useWindowSize();

  const ease = useReadingStore((state) => state.ease);
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
    <Container>
      <p>
        Seu texto está no nível de leitura de{" "}
        <span id="rd_exmlp">{easeToLabel(ease.index)}.</span>
      </p>

      <Content>
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
      </Content>

      <Content>
        <h2>Configurações do editor:</h2>
        <div className="editor_config">
          <label htmlFor="highlight">
            <input
              id="highlight"
              type="checkbox"
              checked={config.highlight || false}
              onChange={(e) => {
                setConfig("highlight", e.target.checked);
              }}
            />
            Destacar dificuldade de leitura das frases
          </label>
        </div>
      </Content>
      <Content>
        <h2>Mais sobre seu texto:</h2>
        <p>
          Tempo de leitura:{" "}
          <strong>{secondsToHMS(getReadingTimeByWords(ease.words))}</strong>
        </p>
        <p>
          Número de palavras: <strong>{ease.words}</strong>
        </p>
        <p>
          Número de frases: <strong>{ease.sentences}</strong>
        </p>
      </Content>
      <Content className="importExternalPage">
        <h2>Deseja importar o conteúdo de uma página externa?</h2>
        <Input
          type="url"
          ref={externalPageUrlRef}
          aria-label="Insira o link da página que deseja importar"
          placeholder="Insira o link da página que deseja importar"
        />
        <button onClick={handleImportClick} type="submit">
          Importar página
        </button>
        <p>* Serviços suportados: Notion, Google Docs</p>
      </Content>
    </Container>
  );
};

export default ResultBox;
