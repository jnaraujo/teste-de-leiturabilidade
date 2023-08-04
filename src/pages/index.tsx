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
        description="Teste a leiturabilidade do seu texto e saiba se ele é de fácil de entender. O teste analisa a legibilidade do seu texto e te dá dicas de como melhorá-lo utlizando o Flesch Reading Ease."
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
