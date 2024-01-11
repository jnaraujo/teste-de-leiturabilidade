import type { Metadata } from "next";

// COMPONENTS
import Editor from "@/components/layouts/Editor";
import HowItWorks from "@/components/layouts/HowItWorks";

export default function Page() {
  return (
    <div className="container">
      <Editor />
      <div className="mx-auto h-[1px] w-full max-w-5xl bg-zinc-300 dark:bg-zinc-600" />
      <article className="container py-4">
        <h1 className="text-2xl font-bold text-zinc-600 dark:text-zinc-400">
          Teste de Leiturabilidade - Faça seu texto ser entendido por todos
        </h1>
        <p className="text-zinc-500">
          Teste a leiturabilidade do seu texto e saiba se ele é de fácil de
          entender. O teste analisa a legibilidade do seu texto e te dá dicas de
          como melhorá-lo utlizando o Flesch Reading Ease.
        </p>
      </article>
      <HowItWorks />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Teste de Leiturabilidade - Faça seu texto ser entendido por todos",
  description:
    "Teste a leiturabilidade do seu texto e saiba se ele é de fácil de entender. O teste analisa a legibilidade e a leiturabilidade do seu texto e te dá dicas de como melhorá-lo utlizando o Flesch Reading Ease.",
};
