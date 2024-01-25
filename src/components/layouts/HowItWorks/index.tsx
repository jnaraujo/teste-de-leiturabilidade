const HowItWorks: React.FC = () => (
  <section className="container flex flex-col gap-2 py-4">
    <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-400">
      Algumas perguntas que você pode ter sobre o Teste de Leiturabilidade:
    </h2>
    <div className="space-y-4" id="como-funciona">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Como funciona o Teste de Leiturabilidade?
        </h3>
        <div>
          <p className="text-zinc-500">
            Para testar o nível de leitura de um texto, nós utilizamos o{" "}
            <a
              href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests"
              target="_blank"
              rel="noreferrer"
            >
              Teste de Legibilidade de Flesch-Kincaid
            </a>{" "}
            (artigo da Wikipedia em inglês).
            <br />O teste original foi feito para a língua inglesa. Porém, a
            fórmula foi adaptada para a língua portuguesa em 1996 pelos
            pesquisadores Teresa B. F. Martins, Claudete M. Ghiraldelo, M.
            Graças V. Nunes e Osvaldo N. Oliveira Jr., do Instituto de Ciências
            Matemáticas e de Computação da USP de São Carlos;
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          O que é legibilidade?
        </h3>
        <div>
          <p className="text-zinc-500">
            Legibilidade refere-se à facilidade com que um texto pode ser lido e
            compreendido. É a qualidade de um texto que torna as palavras e as
            frases claras e acessíveis aos leitores. Vários fatores contribuem
            para a legibilidade de um texto, incluindo o uso adequado de
            palavras, estrutura de frases, pontuação e layout.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Como é calculado o Teste de Leiturabilidade?
        </h3>
        <div>
          <p className="text-zinc-500">
            O <strong>Teste de Flesch-Kincaid</strong> é calculado com base no{" "}
            <strong>número de sílabas</strong> e no{" "}
            <strong>número de palavras</strong> de um texto. A fórmula é a
            seguinte:
            <br />
            <strong>
              248.835 - 1.015 x (número médio de palavras por frase) - 84.6 x
              (número médio de sílabas por palavra)
            </strong>
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Como fazer o teste de um texto?
        </h3>
        <div>
          <p className="text-zinc-500">
            Para fazer o teste de um texto, basta colar o texto no editor e o
            resultado irá aparecer automaticamente.
            <br />
            Além disso, dicas de como melhorar as partes mais difíceis do texto
            também podem ser habilitadas pelo painel lateral.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Como interpretar o resultado do Teste de Leiturabilidade?
        </h3>
        <div>
          <p className="text-zinc-500">
            O resultado do <strong>Teste de Flesch-Kincaid</strong> é um número
            que varia de 0 a 100. Quanto maior o número, mais fácil de ler é o
            texto.
            <br />
            Por exemplo, um texto com resultado 100 é muito fácil de ler. Já um
            texto com resultado 0 é muito difícil de ler.
            <br />
            Claro que o contexo também importa. Um texto com objetivos
            acadêmicos pode ter um resultado mais baixo, mesmo sendo bem
            escrito.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Como melhorar o resultado do Teste de Leiturabilidade?
        </h3>
        <div>
          <p className="text-zinc-500">
            Para melhorar o resultado do{" "}
            <strong>Teste de Flesch-Kincaid</strong>, você pode:
            <br />
            <strong>1)</strong> Utilizar palavras mais simples e curtas;
            <br />
            <strong>2)</strong> Utilizar frases mais curtas;
            <br />
            <strong>3)</strong> Utilizar parágrafos mais curtos;
            <br />
            Além disso, você pode visualizar dicas de como melhorar o seu texto
            clicando no botão{" "}
            <strong>Mostrar dicas de como melhorar o texto</strong>.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          O que o Teste de Leitura leva em conta?
        </h3>
        <div>
          <p className="text-zinc-500">
            Tanto a versão original do <strong>Teste de Flesch-Kincaid</strong>{" "}
            quando a versão brasileira levam em conta o{" "}
            <strong>tamanho da frase</strong> e o{" "}
            <strong>tamanho das palavras</strong>: quanto maior, mais difícil de
            ler.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Quão preciso é o Teste de Leitura?
        </h3>
        <div>
          <p className="text-zinc-500">
            A versão original do <strong>Teste de Flesch-Kincaid</strong> tem
            precisão de quase 90% - o que, para uso comum, é um valor bastante
            considerável.
            <br />
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Quais são as principais métricas utilizadas no Teste de
          Leiturabilidade?
        </h3>
        <div>
          <p className="text-zinc-500">
            No Teste de Leiturabilidade, algumas das principais métricas
            utilizadas incluem o número médio de sílabas por palavra, o número
            médio de palavras por frase e o índice de facilidade de leitura.
            Essas métricas são calculadas para determinar o nível de
            complexidade e legibilidade de um texto.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          O Teste de Leiturabilidade é amplamente utilizado na criação de
          conteúdo online?
        </h3>
        <div>
          <p className="text-zinc-500">
            Sim, o Teste de Leiturabilidade é amplamente utilizado na criação de
            conteúdo online para avaliar a adequação do texto ao público-alvo.
            Ao considerar a leiturabilidade, os escritores podem ajustar seu
            estilo de escrita e escolher palavras e estruturas de frase mais
            apropriadas para garantir que o texto seja compreendido de forma
            eficaz pelo público pretendido.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          {" "}
          O Teste de Leiturabilidade leva em consideração a estrutura do texto?
        </h3>
        <div>
          <p className="text-zinc-500">
            O Teste de Leiturabilidade geralmente não leva em consideração a
            estrutura do texto. Ele se concentra principalmente em aspectos como
            o tamanho das palavras e das frases. No entanto, a estrutura do
            texto, como a organização das ideias, a presença de tópicos e
            subtópicos, e a coerência e coesão do texto, também pode afetar a
            legibilidade e a compreensão geral do leitor.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          O Teste de Leiturabilidade é igualmente eficaz para avaliar a
          legibilidade de diferentes gêneros de texto?
        </h3>
        <div>
          <p className="text-zinc-500">
            O Teste de Leiturabilidade pode fornecer uma indicação geral da
            legibilidade de diferentes gêneros de texto, mas sua eficácia pode
            variar. Alguns gêneros, como textos científicos ou técnicos, podem
            ter terminologia específica e estruturas de frase mais complexas, o
            que pode influenciar a legibilidade. Portanto, ao avaliar a
            legibilidade de diferentes gêneros de texto, é importante considerar
            a natureza específica do gênero e o público-alvo ao interpretar os
            resultados do teste.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Quer saber mais? Dá uma olhada nas fontes:
        </h3>
        <ul className="space-y-2">
          <li>
            <a
              href="http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-violet-600 underline"
            >
              http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests"
              target="_blank"
              rel="noreferrer"
              className="text-violet-600 underline"
            >
              https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default HowItWorks;
