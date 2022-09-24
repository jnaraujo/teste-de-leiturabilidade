/* eslint-disable react/no-danger */
import { useEffect } from "react";

import { DefaultSeo } from "next-seo";

// COMPONENTS
import Navbar from "../components/Navbar";
import { Container, Footer, MainContainer, MainContent } from "../styles/Home";
import { useToast } from "../hooks/useToast";
import Editor from "../layout/Editor";

const Home = () => {
  const toast = useToast({
    saveCookie: "savingMessage",
  });

  useEffect(() => {
    toast.showToast(
      "Ei! Sabia que seu texto é automaticamente salvo no seu navegador?",
      "info"
    );
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
          <Editor />
          <Container container justifyContent="center">
            <Footer item xs={12} className="footer">
              Feito por{" "}
              <a href="https://jnaraujo.com/" target="_blank" rel="noreferrer">
                Jônatas Araújo
              </a>{" "}
              - 2021
            </Footer>
          </Container>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Home;
