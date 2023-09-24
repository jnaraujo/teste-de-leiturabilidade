import Editor from "@/components/layouts/Editor";
import styles from "../../styles/pages/Editor.module.scss";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editor de Facilidade de Leitura - Teste de Leiturabilidade',
  description: 'Editor completo com teste de leitura integrado. Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importa arquivos do Google Docs, Notion, etc e faça o teste de Leiturabilidade.',
}

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Editor />
        </div>
      </div>
    </>
  );
};
