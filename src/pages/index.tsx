/* eslint-disable react/no-danger */
import { useEffect } from "react";

import { DefaultSeo } from "next-seo";
import { Grid } from "@mui/material";

import {
  Container,
  Footer,
  Informations,
  MainContainer,
  MainContent,
  TopBar,
} from "../styles/Home";

// COMPONENTS
import Navbar from "../components/Navbar";
import { useToast } from "../hooks/useToast";
import Editor from "../layouts/Editor";
import HowItWorks from "../layouts/HowItWorks";

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
        title="Teste de Leiturabilidade - Faça seu texto ser entendido por todos"
        description="Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importe arquivos do Google Docs, Notion, etc e faça o teste de ;eiturabilidade."
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
            justifyContent={{
              md: "center",
              lg: "left",
            }}
            style={{
              marginTop: "1rem",
            }}
          >
            <TopBar
              item
              xs={11}
              md={8}
              mx={{
                xs: "auto",
                md: 4,
              }}
            >
              <p>
                Digite o seu texto abaixo e descubra, em tempo real, o{" "}
                <span>nível de leitura</span>.
              </p>
            </TopBar>
          </Container>

          <Editor />

          <div className="line" />

          <Informations>
            <HowItWorks />
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
          </Informations>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Home;
