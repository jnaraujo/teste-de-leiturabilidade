import Navbar from "@/components/layouts/ProEditor/Navbar";
import ProEditorLayout from "@/components/layouts/ProEditor/ProEditorLayout";
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
      <ProEditorLayout />
    </>
  );
}
