import React from "react";
import styles from "./styles.module.scss";
import { Grid } from "@mui/material";

const HowItWorks: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.texts} id="como-funciona">
      <h3>
        Como funciona o Teste de Leiturabilidade?
      </h3>
      <p>
        Para testar o nível de leitura de um texto, nós utilizamos o{" "}
        <a
          href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests"
          target="_blank"
          rel="noreferrer"
        >
          Teste de Legibilidade de Flesch-Kincaid
        </a>{" "}
        (artigo da Wikipedia em inglês).
      </p>
      <p>
        O teste original foi feito para a língua inglesa. Porém, a fórmula foi
        adaptada para a língua portuguesa em 1996 pelos pesquisadores Teresa B.
        F. Martins, Claudete M. Ghiraldelo, M. Graças V. Nunes e Osvaldo N.
        Oliveira Jr., do Instituto de Ciências Matemáticas e de Computação da
        USP de São Carlos;
      </p>

      <h3>
        O que o Teste de Leitura leva em conta?
      </h3>
      <p>
        Tanto a versão original do <strong>Teste de Flesch-Kincaid</strong>{" "}
        quando a versão brasileira levam em conta o{" "}
        <strong>tamanho da frase</strong> e o{" "}
        <strong>tamanho das palavras</strong>: quanto maior, mais difícil de
        ler.
      </p>

      <h3>
        Quão preciso é o Teste de Leitura?
      </h3>
      <p>
        A versão original do <strong>Teste de Flesch-Kincaid</strong> tem
        precisão de quase 90% - o que, para uso comum, é um valor bastante
        considerável.
      </p>

      <h3>
        Quer saber mais? Dá uma olhada nas fontes:
      </h3>
      <ul>
        <li>
          <a
            href="http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf"
            target="_blank"
            rel="noreferrer"
          >
            http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests"
            target="_blank"
            rel="noreferrer"
          >
            https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default HowItWorks;
