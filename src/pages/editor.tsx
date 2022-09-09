/* eslint-disable react/no-danger */
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { Grid } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import { DefaultSeo } from "next-seo";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Modal } from "react-responsive-modal";

// LIBS
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
} from "../styles/Home";
import ResultBox from "../components/ResultBox";
import { getCookie, setCookie } from "../utils/utils";

const Home = () => {
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

  const handleImportClick = useCallback((value: string) => {
    importExternalPage(value);
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
