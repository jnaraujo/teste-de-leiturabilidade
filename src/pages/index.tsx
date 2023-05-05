import { DefaultSeo } from "next-seo";
import styles from "../styles/pages/Home.module.scss"

// COMPONENTS
import Footer from "../components/Footer";
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
            href: "/favicon.ico",
          },
        ]}
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <Editor />
          <div className={styles.line} />
          <div className={styles.inner}>
            <HowItWorks />
            <div className={styles.footer}>
              <div className={styles.line} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
