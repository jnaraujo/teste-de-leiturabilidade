import AdBanner from "@/components/ads/adbanner";

const HowItWorks: React.FC = () => (
  <section className="container flex flex-col gap-2 py-4">
    <h2 className="text-xl font-bold text-zinc-700 dark:text-stone-200">
      Algumas perguntas que você pode ter sobre o Teste de Leiturabilidade:
    </h2>

    <h3
      id="como-funciona"
      className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300"
    >
      Como funciona o Teste de Leiturabilidade?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      Para testar o nível de leitura de um texto, nós utilizamos o{" "}
      <a
        href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests"
        target="_blank"
        rel="noreferrer"
        className="break-words text-violet-600 underline"
      >
        Teste de Legibilidade de Flesch-Kincaid
      </a>{" "}
      (artigo da Wikipedia em inglês).
      <br />O teste original foi feito para a língua inglesa. Porém, a fórmula
      foi adaptada para a língua portuguesa em 1996 pelos pesquisadores Teresa
      B. F. Martins, Claudete M. Ghiraldelo, M. Graças V. Nunes e Osvaldo N.
      Oliveira Jr., do Instituto de Ciências Matemáticas e de Computação da USP
      de São Carlos;
    </p>
    <p className="text-zinc-600 dark:text-stone-400">
      O teste vai te mostrar o quão fácil de ser lido seu texto é. Para isso,
      ele vai te mostrar uma barra, que varia entre vermelho (difícil de ser
      lido) e verde (fácil de ser lido). Além disso, ele vai te mostrar uma
      descrição, indicando um nível médio.
    </p>
    <p className="text-zinc-600 dark:text-stone-400">
      Além disso, o Teste de Leiturabilidade também destaca no próprio texto os
      textos mais fáceis e difíceis (basta ativar a opção na barra lateral{" "}
      <i>Destacar dificuldade de leitura das frases</i>). Você também pode
      ativar a opção <i>Mostrar dicas de como melhorar o texto</i> e verá dicas
      no próprio texto de como melhorar.
    </p>

    <AdBanner
      dataAdFormat="auto"
      dataAdSlot="9308653695"
      dataFullWidthResponsive={true}
    />

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      O que é Legibilidade?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      Legibilidade é a facilidade que um texto pode ser lido e entendido por uma
      pessoa. A legibilidade depende do contexto, uso adequado das palavras,
      estrutura do texto, pontuação, layout etc.
    </p>
    <p className="text-zinc-600 dark:text-stone-400">
      A legibilidade é muito importante tanto na escrita como na comunicação.
      Isso porque ela impacta diretamente na eficácia da transmissão da
      mensagem. A legibilidade não se refere apenas ao grau de dificuldade de
      leitura de um texto, mas também à clareza, fluidez e organização do
      conteúdo.
    </p>
    <p className="text-zinc-600 dark:text-stone-400">
      Legibilidade refere-se à facilidade com que um texto pode ser lido e
      compreendido. É a qualidade de um texto que torna as palavras e as frases
      claras e acessíveis aos leitores. Vários fatores contribuem para a
      legibilidade de um texto, incluindo o uso adequado de palavras, estrutura
      de frases, pontuação e layout.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Qual a diferença entre Leiturabilidade e Legibilidade?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      Tanto Legibilidade quanto Leiturabilidade são conceitos importantes na
      hora de se escrever um texto. Porém, entender as suas diferenças pode
      ajudar você a escrever um texto melhor.
    </p>
    <p className="text-zinc-600 dark:text-stone-400">
      Primeiramente, Legibilidade refere-se à facilidade com que um texto pode
      ser lido e compreendido, geralmente focando em aspectos técnicos e
      estruturais do texto. Alguns aspectos são:
    </p>
    <ul className="ml-4 list-disc space-y-2">
      <li className="text-zinc-600 dark:text-stone-400">
        Clareza do Texto: Como o texto é estruturado e organizado para facilitar
        a compreensão.
      </li>
      <li className="text-zinc-600 dark:text-stone-400">
        Complexidade das Frases: Comprimento e complexidade das frases, e como
        isso afeta a facilidade de leitura.
      </li>
      <li className="text-zinc-600 dark:text-stone-400">
        Vocabulário: Uso de palavras simples e claras versus jargão ou
        vocabulário complexo.
      </li>
      <li className="text-zinc-600 dark:text-stone-400">
        Design e Formatação: Tipografia, espaçamento, contraste e outros
        elementos visuais que afetam a legibilidade.
      </li>
    </ul>
    <p className="text-zinc-600 dark:text-stone-400">
      Leiturabilidade, por outro lado, refere-se ao nível de facilidade com o
      qual o leitor pode compreender um texto. Diferente da Legibilidade, a
      Leiturabilidade leva em consideração fatores não tipográficos.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Como é calculado o Teste de Leiturabilidade?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      O <strong>Teste de Flesch-Kincaid</strong> é calculado com base no{" "}
      <strong>número de sílabas</strong> e no{" "}
      <strong>número de palavras</strong> de um texto. A fórmula é a seguinte:
      <br />
      <strong>
        248.835 - 1.015 x (número médio de palavras por frase) - 84.6 x (número
        médio de sílabas por palavra)
      </strong>
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Como fazer o teste de um texto?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      Para fazer o teste de um texto, basta colar o texto no editor e o
      resultado irá aparecer automaticamente.
      <br />
      Além disso, dicas de como melhorar as partes mais difíceis do texto também
      podem ser habilitadas pelo painel lateral.
    </p>

    <AdBanner
      dataAdFormat="auto"
      dataAdSlot="9308653695"
      dataFullWidthResponsive={true}
    />

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Como interpretar o resultado do Teste de Leiturabilidade?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      O resultado do <strong>Teste de Flesch-Kincaid</strong> é um número que
      varia de 0 a 100. Quanto maior o número, mais fácil de ler é o texto.
      <br />
      Por exemplo, um texto com resultado 100 é muito fácil de ler. Já um texto
      com resultado 0 é muito difícil de ler.
      <br />
      Claro que o contexo também importa. Um texto com objetivos acadêmicos pode
      ter um resultado mais baixo, mesmo sendo bem escrito.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Como melhorar o resultado do Teste de Leiturabilidade?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      Para melhorar o resultado do <strong>Teste de Flesch-Kincaid</strong>,
      você pode:
      <br />
      <strong>1)</strong> Utilizar palavras mais simples e curtas;
      <br />
      <strong>2)</strong> Utilizar frases mais curtas;
      <br />
      <strong>3)</strong> Utilizar parágrafos mais curtos;
      <br />
      Além disso, você pode visualizar dicas de como melhorar o seu texto
      clicando no botão <strong>Mostrar dicas de como melhorar o texto</strong>.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      O que o Teste de Leitura leva em conta?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      Tanto a versão original do <strong>Teste de Flesch-Kincaid</strong> quando
      a versão brasileira levam em conta o <strong>tamanho da frase</strong> e o{" "}
      <strong>tamanho das palavras</strong>: quanto maior, mais difícil de ler.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Quão preciso é o Teste de Leitura?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      A versão original do <strong>Teste de Flesch-Kincaid</strong> tem precisão
      de quase 90% - o que, para uso comum, é um valor bastante considerável.
      Para uso em trabalhos acadêmicos, marketing, UI/UX etc, o Teste de
      Leiturabilidade é bem preciso.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Quais são as principais métricas utilizadas no Teste de Leiturabilidade?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      No Teste de Leiturabilidade, algumas das principais métricas utilizadas
      incluem o número médio de sílabas por palavra, o número médio de palavras
      por frase e o índice de facilidade de leitura. Essas métricas são
      calculadas para determinar o nível de complexidade e legibilidade de um
      texto.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      O Teste de Leiturabilidade é amplamente utilizado na criação de conteúdo
      online?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      Sim, o Teste de Leiturabilidade é amplamente utilizado na criação de
      conteúdo online para avaliar a adequação do texto ao público-alvo. Ao
      considerar a leiturabilidade, os escritores podem ajustar seu estilo de
      escrita e escolher palavras e estruturas de frase mais apropriadas para
      garantir que o texto seja compreendido de forma eficaz pelo público
      pretendido.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      {" "}
      O Teste de Leiturabilidade leva em consideração a estrutura do texto?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      O Teste de Leiturabilidade geralmente não leva em consideração a estrutura
      do texto. Ele se concentra principalmente em aspectos como o tamanho das
      palavras e das frases. No entanto, a estrutura do texto, como a
      organização das ideias, a presença de tópicos e subtópicos, e a coerência
      e coesão do texto, também pode afetar a legibilidade e a compreensão geral
      do leitor.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      O Teste de Leiturabilidade é igualmente eficaz para avaliar a legibilidade
      de diferentes gêneros de texto?
    </h3>
    <p className="text-zinc-600 dark:text-stone-400">
      O Teste de Leiturabilidade pode fornecer uma indicação geral da
      legibilidade de diferentes gêneros de texto, mas sua eficácia pode variar.
      Alguns gêneros, como textos científicos ou técnicos, podem ter
      terminologia específica e estruturas de frase mais complexas, o que pode
      influenciar a legibilidade. Portanto, ao avaliar a legibilidade de
      diferentes gêneros de texto, é importante considerar a natureza específica
      do gênero e o público-alvo ao interpretar os resultados do teste.
    </p>

    <h3 className="mt-6 text-lg font-semibold text-zinc-700 dark:text-stone-300">
      Quer saber mais? Dá uma olhada nas fontes:
    </h3>
    <ul className="space-y-2">
      <li>
        <a
          href="http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf"
          target="_blank"
          rel="noreferrer"
          className="break-words text-violet-600 underline"
        >
          http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf
        </a>
      </li>
      <li>
        <a
          href="https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests"
          target="_blank"
          rel="noreferrer"
          className="break-words text-violet-600 underline"
        >
          https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests
        </a>
      </li>
    </ul>
  </section>
);

export default HowItWorks;
