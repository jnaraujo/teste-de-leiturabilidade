/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { easeToLabel } from "@/libs/ReadingEase";
import cx from "clsx";

import { useReadingStore } from "@/store/readingStore";
import { useConfigStore } from "@/store/configStore";

import { getReadingTimeByWords, secondsToHMS } from "../../utils";

import styles from "./styles.module.scss";
import Button from "../Button";
import dynamic from "next/dynamic";
const ImportPageModal  = dynamic(() => import("./ImportPageModal"));

interface ResultBoxProps {
  onImportPage?: (value: string) => void;
}

const ResultBox: React.FC<ResultBoxProps> = ({ onImportPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sliderSize, setSliderSize] = useState(100);

  const sliderRef = useRef<any>(null);
  const { width, height } = useWindowSize();
  const { config, setConfig } = useConfigStore();
  const ease = useReadingStore((state) => state.ease);


  function base100ToSlideBarSize(value: number) {
    if (!sliderRef.current) return 0;

    const sliderWidth = sliderRef.current?.offsetWidth;
    const formula = value * (sliderWidth / 100);

    return Math.max(Math.min(formula, sliderWidth), 5);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleImportPage = (value: string) => {
    if (onImportPage) {
      onImportPage(value || "");
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    setSliderSize(base100ToSlideBarSize(ease.index));
  }, [width, height, ease]);

  return (
    <>
      <div className={styles.container}>
        <p>
          Seu texto está no nível de leitura de{" "}
          <strong>{easeToLabel(ease.index)}.</strong>
        </p>

        <div className={styles.content}>
          <div className={styles.ease_bar}>
            <div className={styles.slider} style={{ left: `${sliderSize}px` }} />
            <div className={styles.cont}>
              <div className={styles.row} ref={sliderRef}>
                <div className={styles.col} />
                <div className={styles.col} />
                <div className={styles.col} />
                <div className={styles.col} />
                <div className={styles.col} />
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
        </div>

        <div className={styles.content}>
          <strong>Configurações do editor:</strong>
          <div className={styles.editor_config}>
            <label htmlFor="highlight">
              <input
                id="highlight"
                type="checkbox"
                checked={config.highlight}
                onChange={(e) => {
                  setConfig("highlight", e.target.checked);
                }}
              />
              Destacar dificuldade de leitura das frases
            </label>

            <label htmlFor="tips">
              <input
                id="tips"
                type="checkbox"
                checked={config.tips}
                onChange={(e) => {
                  setConfig("tips", e.target.checked);
                }}
              />
              Mostrar dicas de como melhorar o texto
            </label>
          </div>
        </div>
        <div className={styles.content}>
          <strong>Mais sobre seu texto:</strong>
          <p>
            Tempo de leitura:{" "}
            <strong>{secondsToHMS(getReadingTimeByWords(ease.words))}</strong>
          </p>
          <p>
            Quantidade de palavras: <strong>{ease.words}</strong>
          </p>
          <p>
            Quantidade de frases: <strong>{ease.sentences}</strong>
          </p>
        </div>
        <div className={cx(
          styles.content,
          styles.contentImportExternalPage
        )}>
          <strong>Deseja importar o conteúdo de uma página externa?</strong>
          <Button
            onClick={handleOpenModal}
            type="submit"
          >
            Importar página externa
          </Button>
        </div>
      </div>
      {
        isModalOpen && <ImportPageModal open={isModalOpen} onClose={closeModal} onImportPage={handleImportPage} />
      }
    </>
  );
};

export default ResultBox;
