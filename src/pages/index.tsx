import { DefaultSeo } from "next-seo";
import { Grid } from "@mui/material";

import {
  Container,
  Informations,
  MainContainer,
  MainContent,
  TopBar,
} from "../styles/pages/Home";

// COMPONENTS
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Editor from "../layouts/Editor";
import HowItWorks from "../layouts/HowItWorks";

const Home = () => {
  return (
    <>
      <DefaultSeo
        title="Teste de Leiturabilidade - Faça seu texto ser entendido por todos"
        description="Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importe arquivos do Google Docs, Notion, etc e faça o teste de leiturabilidade."
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
          >
            <TopBar
              item
              xs={12}
              md={10}
              lg={8}
              pl={{
                xs: 1,
                md: 0,
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
              <Footer />
            </Container>
          </Informations>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Home;
