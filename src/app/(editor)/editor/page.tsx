import Editor from "@/components/layouts/Editor";
import Navbar from "@/components/layouts/EditorPro/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editor de Facilidade de Leitura - Teste de Leiturabilidade",
  description:
    "Editor completo com teste de leitura integrado. Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importa arquivos do Google Docs, Notion, etc e faça o teste de Leiturabilidade.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="container mt-4">
        <Editor />
      </section>
    </>
  );
}
