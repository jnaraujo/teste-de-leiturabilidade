/* eslint-disable react/no-danger */
import { useEffect, useState, useCallback } from "react";

import { ToastContainer, toast } from "react-toastify";

import { DefaultSeo } from "next-seo";
import { Grid } from "@mui/material";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Modal } from "react-responsive-modal";

import {
  Container,
  Content,
  Footer,
  Informations,
  MainContainer,
  MainContent,
  ModalDiv,
  TopBar,
} from "../styles/Home";
import { getCookie, setCookie } from "../utils/utils";

// COMPONENTS
import TextEditor from "../components/TextEditor/index";
import Navbar from "../components/Navbar";
import ResultBox from "../components/ResultBox";
import { useImportExternalPage } from "../hooks/useImportExternalPage";

interface IModalMessage {
  title: string;
  message: string;
}

const Home = () => {
  const { fetch, data, error } = useImportExternalPage();

  const [editorHtml, setEditorHtml] = useState("");

  const [modalMessage, setModalMessage] = useState<IModalMessage>(
    {} as IModalMessage
  );

  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const closeModal = () => setOpen(false);

  function changeModal(message: { title: string; message: string }) {
    setModalMessage({
      title: message.title,
      message: message.message,
    });

    setLoading(false);
    setOpen(true);
  }

  useEffect(() => {
    if (data) {
      setEditorHtml(data);
    }
    setLoading(false);
  }, [data]);

  useEffect(() => {
    if (error) {
      changeModal({
        title: error.title,
        message: error.message,
      });
    }
  }, [error]);

  const handleImportClick = useCallback((value: string) => {
    if (value) {
      setLoading(true);
      fetch(value);
    }
  }, []);

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

  return (
    <>
      <DefaultSeo
        title="Teste de Leitura"
        description="Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importa arquivos do Google Docs, Notion, etc e faça o teste de Leiturabilidade."
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
          <Container
            container
            justifyContent="center"
            style={{
              marginTop: "1rem",
            }}
          >
            <TopBar item xs={12}>
              <p>
                Digite o seu texto abaixo e descubra, em tempo real, o{" "}
                <span>nível de leitura</span>.
              </p>
            </TopBar>
          </Container>
          <Container container justifyContent="center">
            <Content item xs={11} md={8} className="left">
              <div className="textarea">
                <TextEditor html={editorHtml} />
              </div>
            </Content>
            <Content item xs={11} md={8} lg={3}>
              <ResultBox onImportPage={handleImportClick} />
            </Content>
          </Container>
          <ToastContainer
            position="top-left"
            hideProgressBar={false}
            draggable
            autoClose={1000}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
          />
          <div className="line" />
          <Informations>
            <Grid container justifyContent="center">
              <Grid item xs={11} className="texts" id="como-funciona">
                <h2>Como funciona o Teste de Leitura?</h2>
                <p>
                  Para testar o nível de leitura de um texto, nós utilizamos o{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Teste de Legibilidade de Flesch-Kincaid
                  </a>{" "}
                  (artigo da Wikipedia em inglês).
                </p>
                <p>
                  O teste original foi feito para a língua inglesa. Porém, a
                  fórmula foi adaptada para a língua portuguesa em 1996 pelos
                  pesquisadores Teresa B. F. Martins, Claudete M. Ghiraldelo, M.
                  Graças V. Nunes e Osvaldo N. Oliveira Jr., do Instituto de
                  Ciências Matemáticas e de Computação da USP de São Carlos;
                </p>

                <h2>O que o Teste de Leitura leva em conta?</h2>
                <p>
                  Tanto a versão original do{" "}
                  <strong>Teste de Flesch-Kincaid</strong> quando a versão
                  brasileira levam em conta o <strong>tamanho da frase</strong>{" "}
                  e o <strong>tamanho das palavras</strong>: quanto maior, mais
                  difícil de ler.
                </p>

                <h2>Quão preciso é o Teste de Leitura?</h2>
                <p>
                  A versão original do <strong>Teste de Flesch-Kincaid</strong>{" "}
                  tem precisão de quase 90% - o que, para uso comum, é um valor
                  bastante considerável.
                </p>

                <h3>Quer saber mais? Dá uma olhada nas fontes:</h3>

                <ul>
                  <li>
                    <a
                      href="http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
            <Container container justifyContent="center">
              <Grid item xs={12} className="line" />
              <Footer item xs={12} className="footer">
                Feito por{" "}
                <a
                  href="https://jnaraujo.com/"
                  target="_blank"
                  rel="noreferrer"
                >
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
                </div>
              </ModalDiv>
            </Modal>
          </Informations>
        </MainContent>

        <div className={isLoading === true ? "loading" : "hideAndNone"}>
          <AiOutlineLoading3Quarters />
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
