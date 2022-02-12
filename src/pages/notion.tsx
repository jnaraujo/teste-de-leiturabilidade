import React, { createElement, useEffect, useRef, useState } from 'react';
import styles from '@styles/Home.module.scss';

import nookies from 'nookies'

import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DefaultSeo } from 'next-seo';
import { Grid } from '@material-ui/core';

import * as ReadingEase from './../libs/readability/ReadingEase';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import axios from 'axios';

import { NotionRenderer } from "react-notion";

import { renderToString } from 'react-dom/server'



type EaseResultType = {
  totalWords: number,
  nTotalSentences: number,
  totalSyllables: number,
}
// COMPONENTS

export default function Home() {
  const [easeResult, setEaseResult] = useState({} as EaseResultType);
  const [sliderSize, setSliderSize] = useState(0);
  const [easeExample, setEaseExample] = useState("");

  const [editorHtml, setEditorHtml] = useState(null);
  const editorRef = useRef(null);

  function onChange(e) {
    setEditorHtml(e.target.value);
  }

  const [modalMessage, setModalMessage] = useState({} as {
    title: string,
    message: string,
  });
  const [secondButton, setSecondButton] = useState({} as {
    value:string,
    onClick:() => void
  });

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  function changeModal(message: {
    title: string,
    message: string,
  }, secondButton?: {
    value: string,
    onClick: () => void
  }){
    setModalMessage({
      title: message.title,
      message: message.message,
    });
    if(secondButton){
      setSecondButton(secondButton);
    }
  }

  const router = useRouter();
  const notionUrl = router.query.link;

  const sliderRef = useRef(null)

  function handleTextareaChange(event){

    const tFR = ReadingEase.fleschReadingEaseBR(event.target.value || "a")

    console.log(111);

    setEaseResult(tFR)
    setSliderSize(base100ToSlideBarSize(tFR.result))
    setEaseExample(easeResultToExample(tFR.result))
  }
  function base100ToSlideBarSize(value) {
    if(!sliderRef.current) return;
      const sliderWidth = sliderRef.current.offsetWidth;
      const formula = value * ((sliderWidth)/100);
      return Math.max(Math.min(formula, sliderWidth), 5);
  }
  function easeResultToExample(value){
      const fred = ReadingEase.fred(value)
      if(fred===0) return "um estudante universitário";
      if(fred===1) return "um estudante do ensino médio"
      if(fred===2) return "um estudante do 6º ao 9º ano"
      return "um estudante do 1º ao 5º ano"
  }
  useEffect(()=>{
    if(notionUrl){
      let pageIdSplit = String(notionUrl).split("-");
      const pageId = pageIdSplit[pageIdSplit.length-1];

      const fetchUrl = `https://notion-api.splitbee.io/v1/page/${pageId}`;
      
      axios.get(fetchUrl).then(res => {
        const data = res.data;

        const notionDiv = <NotionRenderer blockMap={data} />;
        const html = renderToString(notionDiv);

        setEditorHtml(html)

        handleTextareaChange({target:{value:editorRef.current.value}});

      }).catch(err => {
        changeModal({
          title: "A sua página do Notion não foi encontrada.",
          message: 'Verifique se você deixou ela pública.',
        }, {
          value: 'Saiba mais',
          onClick: () => {
            
          }
        })
        setOpen(true)
      })
    }
}, [notionUrl])
  return (
    <>
    <DefaultSeo
      title="Teste de Leiturabilidade"
      description="Saiba em tempo real e de graça o quão fácil de ser lido seu texto é."
      additionalLinkTags={
        [
            {
                rel: "icon",
                href: "/images/minified/favicon.webp",
            }
        ]
      }
    />
    <div className={styles.home}>
      <div className={styles.container}>
      <Grid container justifyContent='center' className={styles.navbar}>
        <Grid item xs={11} md={8} lg={8} xl={8}>
          <div className={styles.top}>
              <h1>
                  Teste de leitura
              </h1>
              <p>
                  Digite o seu texto abaixo e descubra, em tempo real, o <span>nível de leitura</span>.
              </p>
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' className={styles.content}>
        <Grid item xs={11} md={8} xl={6}>
          <div className={styles.textarea}>
              <div className={styles.editor} contentEditable={true} dangerouslySetInnerHTML={{
                __html: editorHtml
              }}
              onInput={
                handleTextareaChange
              } ref={editorRef}></div>
          </div>
        </Grid>
        <Grid item xs={11} md={8} xl={2} className={styles.rd_result}>
          <p>
              Seu texto está no nível de leitura de <span id="rd_exmlp">{easeExample}.</span>
          </p>
          <div className={styles.ease_bar}>
              <div className={styles.slider} style={{left: `${sliderSize}px`}}></div>
              <div className={styles.cont}>
                  <div className={styles.row} ref={sliderRef}>
                      <div className={styles.col}></div>
                      <div className={styles.col}></div>
                      <div className={styles.col}></div>
                      <div className={styles.col}></div>
                      <div className={styles.col}></div>
                  </div>
              </div>
          </div>
          <ul>
              <li>Muito<br/><span>difícil</span></li>
              <li>Médio</li>
              <li>Muito<br/><span>fácil</span></li>
          </ul>
          <p>
              <br />
              <strong style={{
                  fontSize: "20px"
              }}>Mais sobre seu texto:</strong><br />
              Número de palavras: <strong>{easeResult.totalWords}</strong><br />
              Número de frases: <strong>{easeResult.nTotalSentences}</strong><br />
          </p>
        </Grid>
      </Grid>
      <ToastContainer position="top-left" hideProgressBar={false} draggable={true} autoClose={1000} pauseOnHover={false} pauseOnFocusLoss={false} />
      <div className={styles.infos}>
        <Grid container justifyContent="center">
          <Grid item xs={11} className={styles.line}></Grid>
          <Grid item xs={11} lg={10} xl={7} className={styles.texts}>
            <h2>Como funciona o teste?</h2>
            <p>
                Para testar o nível de leitura de um texto, nós utilizamos o <a href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests" target="_blank" rel="noreferrer">Teste de Legibilidade de Flesch-Kincaid</a> (artigo da Wikipedia em inglês).
            </p>
            <p>
                O teste original foi feito para a língua inglesa. Porém, a fórmula foi adaptada para a língua portuguesa em 1996 pelos pesquisadores Teresa B. F. Martins, Claudete M. Ghiraldelo, M. Graças V. Nunes e Osvaldo N. Oliveira Jr., do Instituto de Ciências Matemáticas e de Computação da USP de São Carlos;
            </p>

            <h2>
                O que o teste leva em conta?
            </h2>
            <p>
                Tanto a versão original do <strong>Teste de Flesch-Kincaid</strong> quando a versão brasileira levam em conta o <strong>tamanho da frase</strong> e o <strong>tamanho das palavras</strong>: quanto maior, mais difícil de ler.
            </p>

            <h2>
                Quão preciso é o teste?
            </h2>
            <p>
                A versão original do <strong>Teste de Flesch-Kincaid</strong> precisão de quase 90% - o que, para uso comum, é um valor bastante considerável.
            </p>

            <h3>
                Quer saber mais? Dá uma olhada nas fontes:
            </h3>

            <ul>
                <li>
                    <a href="http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf" target="_blank" rel="noreferrer">http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf</a>
                </li>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests</a>
                </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} className={styles.line}></Grid>
          <Grid item xs={12} className={styles.footer}>
            Feito por <a href='https://jnaraujo.com/' target="_blank" rel="noreferrer">Jônatas Araújo</a> - 2021
          </Grid>
        </Grid>
        <Modal open={open} onClose={closeModal} center>
          <div className={styles.modal}>
              <div className={styles.message}>
                  <h1>
                    {modalMessage.title}
                  </h1>
                  <p>
                    {modalMessage.message}
                  </p>
              </div>
              <div className={styles.line}></div>
              <div className={styles.button}>
                  <button onClick={closeModal}>Fechar</button>
                  {
                    secondButton.value ? (<>
                      <button onClick={secondButton.onClick}>{secondButton.value}</button>
                    </>): ""
                    
                  }
              </div>
          </div>
        </Modal>
      </div>
      </div>
    </div>
    </>
  )
}
