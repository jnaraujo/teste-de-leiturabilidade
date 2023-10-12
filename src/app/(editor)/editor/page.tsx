import Pomodoro from "@/components/Pomodoro";
import Stats from "@/components/Stats";
// import Stats from "@/components/Stats";
import Editor from "@/components/layouts/Editor";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editor de Facilidade de Leitura - Teste de Leiturabilidade",
  description:
    "Editor completo com teste de leitura integrado. Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importa arquivos do Google Docs, Notion, etc e faça o teste de Leiturabilidade.",
};

export default function Page() {
  return (
    <>
      <header className="container grid grid-cols-3 py-3">
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-1">
            <ArrowLeft
              size={16}
              className="text-zinc-600 group-hover:text-zinc-800"
            />
            <span className="text-sm text-zinc-500 group-hover:text-zinc-600">
              Voltar para a página inicial
            </span>
          </Link>
        </div>
        <Pomodoro />
        <div className="flex items-center justify-end">
          <Stats />
        </div>
      </header>
      <section className="container mt-4">
        <Editor />
      </section>
    </>
  );
}
