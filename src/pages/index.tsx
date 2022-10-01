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
            <Grid container justifyContent="center">
              <Grid item xs={11} className="texts" id="como-funciona">
                <h2>Como funciona o Teste de Leiturabilidade?</h2>
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
          </Informations>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Home;
