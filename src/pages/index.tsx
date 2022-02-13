import React, { useEffect, useRef, useState } from 'react';
import nookies from 'nookies'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DefaultSeo } from 'next-seo';
import { Grid } from '@material-ui/core';

import * as ReadingEase from './../libs/readability/ReadingEase';

import { useRouter } from 'next/router';

import { NotionRenderer } from "react-notion";

import { renderToString } from 'react-dom/server'

import {AiOutlineLoading3Quarters } from 'react-icons/ai';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';

type EaseResultType = {
  totalWords: number,
  nTotalSentences: number,
  totalSyllables: number,
}

import styles from '@styles/Home.module.scss';

// COMPONENTS
import TextEditor from './../components/TextEditor';

export default function Home() {
  const [easeResult, setEaseResult] = useState({} as EaseResultType);
  const [sliderSize, setSliderSize] = useState(0);
  const [easeExample, setEaseExample] = useState("");
  const [editorHtml, setEditorHtml] = useState("");

  const [editorData, setEditorData] = useState({} as {
    html: string,
    text: string
  })

  const [isLoading, setLoading] = useState(false);

  const notionUrlInputRef = useRef(null);

  const router = useRouter();
  const notionUrl = router.query.notion;

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

  const sliderRef = useRef(null)

  function getCookie(){
    return nookies.get(null, {})[`toastedInfo`]
  }

  function setCookie(value: string | boolean) {
    nookies.set(null, 'toastedInfo', String(value), {
      maxAge: 24 * 60 * 60
    })
  }

  function importNotionPageByUrl(url: string | any){
    setLoading(true);
    let pageIdSplit = String(url).split("-");
    const pageId = pageIdSplit[pageIdSplit.length-1];
    const fetchUrl = `https://notion-api.splitbee.io/v1/page/${pageId}`;
    
    axios.get(fetchUrl).then(res => {
      const data = res.data;
      
      if(Object.keys(data).length === 0){
        changeModal({
          title: "A sua página do Notion não está pública.",
          message: `Na sua página do Notion, clique em "Share" no canto superior direito e depois em "Share to web".<br/><img src="/images/raw/notion_share_link.webp"/>`,
        }, {
          value: "Tentar novamente",
          onClick: () => {
            closeModal()
            router.push({
              pathname: router.pathname,
              query: router.query
            });
          }
        })
        
        setOpen(true)
        return;
      }

      const notionDiv = <NotionRenderer blockMap={data} />;
      const html = renderToString(notionDiv);

      setEditorHtml(html)
    }).catch(err => {
      changeModal({
        title: "A sua página do Notion não foi encontrada.",
        message: 'Verifique se o link está correto e desative seu AdBlock.',
      })
      setOpen(true)
    }).finally(() => {
      setLoading(false);
    })
  }
  function handleEditorChange(data : {
    html: string,
    text: string,
  }){
    setEditorData(data);
    const tFR = ReadingEase.fleschReadingEaseBR(data.text)
    
    localStorage.setItem("text", data.html);

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
      setEditorHtml(localStorage.getItem("text") ?? "")
      if(!getCookie()){
          toast.info('Ei! Sabia que seu texto é automaticamente salvo no seu navegador?', {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });

          setCookie(true);
      }else{
          toast.info('Seu texto foi automaticamente carregado!', {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
      }

      window.onresize = ()=>{
          setSliderSize(base100ToSlideBarSize(easeResult["result"]));
      }
  }, [])

  useEffect(()=>{
    if(notionUrl){
      importNotionPageByUrl(notionUrl);
    }
  }, [router]);

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
        <Grid item xs={11} md={8} lg={9}>
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
        <Grid item xs={11} md={8} lg={6}>
          
          <div className={styles.textarea}>
            <TextEditor html={editorHtml} onChange={handleEditorChange}></TextEditor>
          </div>
        </Grid>
        <Grid item xs={11} md={8} lg={3} className={styles.rd_result}>
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
          <br />
          <div className={styles.importFromNotion}>
            <p>Deseja importar uma página do Notion?</p>
            <input type="url" ref={notionUrlInputRef} />
            <button onClick={()=>{
              const url = notionUrlInputRef.current.value;
              router.push({
                pathname: router.pathname,
                query: {
                  notion: url
                }
              });
            }}>Importar página</button>
          </div>
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
                  <p dangerouslySetInnerHTML={{
                    __html: modalMessage.message
                  }}>
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
      <div className={(isLoading===true ? styles.loading : styles.hideAndNone)}>
        <AiOutlineLoading3Quarters />
      </div>
    </div>
    </>
  )
}
