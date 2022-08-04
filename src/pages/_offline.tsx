/* eslint-disable react/no-danger */
import { useEffect, useRef, useState } from "react";
import nookies from "nookies";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DefaultSeo } from "next-seo";
import { Grid } from "@mui/material";

import { useRouter } from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useWindowSize } from "react-use";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { getReadingTimeByWords, secondsToHMS } from "../utils/readingTime";
import { useLeiturabilidade } from "../context/LeiturabilidadeContext";
import handleImport from "../libs/ImportExternalPage";

// COMPONENTS
import TextEditor from "../components/TextEditor/index";
import Navbar from "../components/Navbar";
import {
  Container,
  Content,
  Footer,
  MainContainer,
  MainContent,
  ModalDiv,
  RdResult,
} from "../styles/Home";

function getCookie() {
  return nookies.get(null, {}).toastedInfo;
}

function setCookie(value: string | boolean) {
  nookies.set(null, "toastedInfo", String(value), {
    maxAge: 24 * 60 * 60,
  });
}

function easeResultToExample(value) {
  if (value > 75) return "um estudante do 1º ao 5º ano";
  if (value > 50) return "um estudante do 6º ao 9º ano";
  if (value > 25) return "um estudante do ensino médio";

  return "um estudante universitário";
}

const Home = () => {
  const { ease } = useLeiturabilidade();

  const sliderRef = useRef(null);

  const { width, height } = useWindowSize();
  const [sliderSize, setSliderSize] = useState(100);
  const [editorHtml, setEditorHtml] = useState("");

  const [modalMessage, setModalMessage] = useState(
    {} as {
      title: string;
      message: string;
    }
  );
  const [secondButton, setSecondButton] = useState(
    {} as {
      value: string;
      onClick: () => void;
    }
  );
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [isLoading, setLoading] = useState(false);

  const externalPageUrlRef = useRef(null);

  const router = useRouter();

  function changeModal(
    message: {
      title: string;
      message: string;
    },
    secondButtonn?: {
      value: string;
      onClick: () => void;
    }
  ) {
    setModalMessage({
      title: message.title,
      message: message.message,
    });
    if (secondButtonn) {
      setSecondButton(secondButtonn);
    }
  }

  async function importExternalPage(url: string) {
    setLoading(true);

    const data = await handleImport(url);

    if (data.status === "error") {
      changeModal(
        {
          title: data.message.title,
          message: data.message.description,
        },
        {
          value: "Tentar novamente",
          onClick: () => {
            closeModal();
            importExternalPage(url);
          },
        }
      );
      setLoading(false);
      return setOpen(true);
    }

    setEditorHtml(data.html);

    return setLoading(false);
  }

  useEffect(() => {
    importExternalPage(String(router.query.url));
  }, [router.query.url]);

  const handleImportClick = () => {
    const inputUrl = externalPageUrlRef.current?.value;
    return importExternalPage(inputUrl);
  };

  function base100ToSlideBarSize(value) {
    if (!sliderRef.current) return 0;

    const sliderWidth = sliderRef.current.offsetWidth;
    const formula = value * (sliderWidth / 100);

    return Math.max(Math.min(formula, sliderWidth), 5);
  }

  useEffect(() => {
    if (!getCookie()) {
      toast.info(
        "Ei! Sabia que seu texto é automaticamente salvo no seu navegador?",
        {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      setCookie(true);
    }
  }, []);

  useEffect(() => {
    setSliderSize(base100ToSlideBarSize(ease.index));
  }, [width, height, ease]);

  return (
    <>
      <DefaultSeo
        title="Editor de Texto - Teste de Leitura"
        description="Editor completo com teste de leitura integrado. Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importa arquivos do Google Docs, Notion, etc e faça o teste de Leiturabilidade."
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/minified/favicon.webp",
          },
        ]}
      />
      <MainContainer>
        <MainContent>
          <Navbar />
        </MainContent>
        <MainContent>
          <Container container justifyContent="center">
            <Content item xs={11} md={8} lg={7} className="left">
              <div className="textarea">
                <TextEditor html={editorHtml} />
              </div>
            </Content>
            <RdResult item xs={11} md={8} lg={3}>
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
                <strong>
                  {secondsToHMS(getReadingTimeByWords(ease.words))}
                </strong>
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
          </Container>
          <ToastContainer
            position="top-left"
            hideProgressBar={false}
            draggable
            autoClose={1000}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
          />
          <Container container justifyContent="center">
            <Grid item xs={12} className="line" />
            <Footer item xs={12} className="footer">
              Feito por{" "}
              <a href="https://jnaraujo.com/" target="_blank" rel="noreferrer">
                Jônatas Araújo
              </a>{" "}
              - 2021
            </Footer>
          </Container>

          <Modal open={open} onClose={closeModal} center>
            <ModalDiv>
              <div className="message">
                <h1>{modalMessage.title}</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: modalMessage.message,
                  }}
                />
              </div>
              <div className="line" />
              <div className="button">
                <button onClick={closeModal} type="button">
                  Fechar
                </button>
                {secondButton.value ? (
                  <button onClick={secondButton.onClick} type="button">
                    {secondButton.value}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </ModalDiv>
          </Modal>
        </MainContent>

        <div className={isLoading === true ? "loading" : "hideAndNone"}>
          <AiOutlineLoading3Quarters />
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
