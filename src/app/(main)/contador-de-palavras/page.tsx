import type { Metadata } from "next";
import { WordCounter } from "./word-counter";

export default function Page() {
  return (
    <div className="container">
      <section className="flex h-full min-h-[70svh] w-full flex-col items-center gap-6">
        <div className="w-full space-y-2">
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-stone-300">
            Contador de Palavras
          </h1>
          <p className="max-w-screen-md text-zinc-600 dark:text-stone-400">
            Descubra quantas palavras, caracteres e frases tem o seu texto.
            Basta copiar e colar seu texto no editor, e nossa ferramenta
            calculará automaticamente para você.
          </p>
        </div>
        <WordCounter />
      </section>

      <article className="container mt-12 flex flex-col gap-2 py-4">
        <h2 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
          Por que usar um contador de palavras?
        </h2>
        <ul className="ml-4 list-disc space-y-2">
          <li className="text-zinc-600 dark:text-stone-400">
            Gerenciamento de Documentos: Controle o comprimento dos seus textos
            para atender aos requisitos específicos de comprimento.
          </li>
          <li className="text-zinc-600 dark:text-stone-400">
            Análise de Texto: Obtenha insights sobre a densidade de palavras e a
            estrutura do seu texto.
          </li>
          <li className="text-zinc-600 dark:text-stone-400">
            Edição Eficiente: Facilite a revisão e edição ao conhecer o número
            exato de palavras.
          </li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
          Como usar?
        </h2>
        <ol className="ml-4 list-decimal space-y-2">
          <li className="text-zinc-600 dark:text-stone-400">
            Copie o texto que você deseja analisar.
          </li>
          <li className="text-zinc-600 dark:text-stone-400">
            Cole-o no editor de texto.
          </li>
          <li className="text-zinc-600 dark:text-stone-400">
            Veja a quantidade de palavras, frases e caracteres aparecer
            automaticamente para você!
          </li>
        </ol>

        <h2 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
          Como contar caracteres e frases?
        </h2>
        <p className="text-zinc-600 dark:text-stone-400">
          Além de fornecer o número total de palavras, o Contador de Palavras
          também conta o número de caracteres e frases no texto. Isso pode ser
          particularmente útil para avaliar a densidade do conteúdo e para
          garantir que você atenda a diferentes requisitos de formatação e
          estilo. As contagens de caracteres são essenciais para plataformas com
          limites de caracteres, como redes sociais, enquanto a contagem de
          frases pode ajudar a avaliar a fluidez e a estrutura do texto.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
          O que é um contador de palavras?
        </h2>
        <p className="text-zinc-600 dark:text-stone-400">
          Um contador de palavras é uma ferramenta projetada para calcular o
          número total de palavras em um texto. Essa ferramenta é especialmente
          útil para escritores, estudantes e profissionais que precisam
          verificar rapidamente a extensão de seus documentos. Além de contar
          palavras, nossa ferramenta de contagem de palavras também fornece
          informações sobre o número de caracteres, frases e parágrafos,
          ajudando a realizar uma análise mais completa do texto.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
          Como um Contador de Palavras vai me ajudar a escrever melhor?
        </h2>
        <p className="text-zinc-600 dark:text-stone-400">
          Usar um contador de palavras pode trazer uma série de benefícios,
          especialmente se você trabalha com textos regularmente. Aqui estão
          alguns dos principais motivos para incorporar essa ferramenta em seu
          fluxo de trabalho:
        </p>
        <ul className="ml-4 list-disc space-y-2">
          <li className="text-zinc-600 dark:text-stone-400">
            <b className="font-semibold">Otimização para SEO</b>: Ao escrever
            para a web, conhecer o número de palavras pode ajudar a manter seus
            textos dentro das melhores práticas de SEO. Um texto longo demais
            pode cansar o usuário, enquanto um texto curto demais pode acabar
            com suas chances de aparecer em primeiro lugar no Google.
          </li>
          <li className="text-zinc-600 dark:text-stone-400">
            <b className="font-semibold">Trabalhos acadêmicos</b>: Muitos
            trabalhos acadêmicos, artigos e relatórios têm limites de palavras
            específicos. Com nossa ferramenta, você pode garantir que seus
            documentos atendam a esses requisitos sem dificuldade.
          </li>
          <li className="text-zinc-600 dark:text-stone-400">
            <b className="font-semibold">Para Escrita Criativa</b>: Monitore o
            comprimento de suas histórias ou poemas para manter a estrutura
            desejada.
          </li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
          Como contar o tempo de leitura do meu texto?
        </h2>
        <p className="text-zinc-600 dark:text-stone-400">
          Contar quanto tempo leva para uma pessoa ler um texto é uma tarefa
          muito complicada, pois pessoas diferentes possuem tempos de leitura
          diferente. Por exemplo, a velocidade de leitura de uma criança não é a
          mesma de um adolescente, e a de um adolescente é diferente da de um
          adulto.
        </p>
        <p className="text-zinc-600 dark:text-stone-400">
          O nosso Contador de Palavras se baseia no tempo de leitura de uma
          pessoa média (entre 150 a 250 palavras por minuto) para calcular em
          quanto tempo o seu texto pode ser lido. Para verificar o seu
          texto,basta colá-lo no editor e ele vai te mostrar todos os detalhes.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
          Como contar quantas frases tem meu texto?
        </h2>
        <p className="text-zinc-600 dark:text-stone-400">
          Para calcular quantas frases tem o seu texto, basta colar o texto no
          editor e ele vai te mostrar a quantidade de frases do seu texto. Além
          disso, ele vai te mostrar o tempo de leitura, a quantidade de palavras
          e de caracteres.
        </p>
      </article>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contador de Palavras - Teste de Leiturabilidade",
  description:
    "Use nosso contador de palavras online para calcular rapidamente o número de palavras, caracteres, frases e tempo de leitura em seus textos. Nossa ferramenta gratuita e precisa é ideal para escritores, estudantes e profissionais que precisam verificar o comprimento de seus documentos com facilidade.",
};
