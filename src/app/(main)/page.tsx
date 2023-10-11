import styles from "@/styles/pages/Home.module.scss"
import type { Metadata } from "next";

// COMPONENTS
import Editor from "@/components/layouts/Editor";
import HowItWorks from "@/components/layouts/HowItWorks";

export default function Page(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Editor />
          <div className={styles.line} />
          <div className={styles.inner}>
            <HowItWorks />
          </div>
        </div>
      </div>
    </>
  );
};

export const metadata: Metadata = {
  title: 'Teste de Leiturabilidade - Faça seu texto ser entendido por todos',
  description: 'Teste a leiturabilidade do seu texto e saiba se ele é de fácil de entender. O teste analisa a legibilidade do seu texto e te dá dicas de como melhorá-lo utlizando o Flesch Reading Ease.',
}