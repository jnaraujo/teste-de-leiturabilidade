import type { Metadata } from "next";

// COMPONENTS
import Editor from "@/components/layouts/Editor";
import HowItWorks from "@/components/layouts/HowItWorks";

export default function Page() {
  return (
    <div className="container">
      <Editor />
      <div className="mx-auto h-[1px] w-full max-w-5xl bg-zinc-300 dark:bg-zinc-600" />
      <HowItWorks />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Teste de Leiturabilidade - Faça seu texto ser entendido por todos",
  description:
    "Teste a leiturabilidade do seu texto e saiba se ele é de fácil de entender. O teste analisa a legibilidade do seu texto e te dá dicas de como melhorá-lo utlizando o Flesch Reading Ease.",
};
