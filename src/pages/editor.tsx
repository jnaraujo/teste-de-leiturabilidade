import { DefaultSeo } from "next-seo";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Editor from "../layouts/Editor";

import { MainContainer, MainContent } from "../styles/pages/Home";

const Home = () => {
  return (
    <>
      <DefaultSeo
        title="Editor de Facilidade de Leitura - Teste de Leiturabilidade"
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
          <Footer />
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Home;
