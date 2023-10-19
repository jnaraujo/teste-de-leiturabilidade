import type { Metadata } from "next";

// COMPONENTS
import Editor from "@/components/layouts/Editor";
import HowItWorks from "@/components/layouts/HowItWorks";

export default function Page() {
  return (
    <article className="container">
      <Editor />
      <div className="h-[1px] w-full max-w-5xl bg-gray-300" />
      <HowItWorks />
    </article>
  );
}

export const metadata: Metadata = {
  title: "Teste de Leiturabilidade - Faça seu texto ser entendido por todos",
  description:
    "Teste a leiturabilidade do seu texto e saiba se ele é de fácil de entender. O teste analisa a legibilidade do seu texto e te dá dicas de como melhorá-lo utlizando o Flesch Reading Ease.",
};
