<div align="center" >
  <h1>📖 Teste de Facilidade de Leitura</h1>
</div>

<div align="center">
  
![Most used language](https://img.shields.io/github/languages/top/jnaraujo/teste-de-leiturabilidade?style=flat-square)
![GitHub](https://img.shields.io/github/license/jnaraujo/teste-de-leiturabilidade)
[![Website notes.jnaraujo.com](https://img.shields.io/website-up-down-green-red/http/leitura.jnaraujo.com.svg)](https://leitura.jnaraujo.com/)

</div>

Um teste de facilidade de leitura que funciona em textos em português. Utiliza a fórmula Flesch-Kincaid adaptada para a língua portuguesa em 1996 pelos pesquisadores Teresa B. F. Martins, Claudete M. Ghiraldelo, M. Graças V. Nunes e Osvaldo N. Oliveira Jr., do Instituto de Ciências Matemáticas e de Computação da USP de São Carlos;

> Acesse a versão oficial [clicando aqui!](https://leitura.jnaraujo.com)

<div align="center" >
  <img src="/public/ui/home_mobile.png" height="300" width="auto">
  <img src="/public/ui/home_pc.png" height="300" width="auto">
</div>

## 💻 Stack do Projeto

1.  ReactJS
2.  NextJS
3.  TypeScript

## 🚀 Rodando localmente

1. Clone o projeto

```sh
git clone https://github.com/jnaraujo/teste_de_facilidade_de_leitura.git
```

2. Abra a pasta do projeto

```sh
cd teste_de_facilidade_de_leitura
```

3. Instale as dependências

```sh
pnpm install
```

4. Rode localmente

```sh
pnpm dev
```

## Algumas informações:

### Como funciona o teste?

Para testar o nível de leitura de um texto, nós utilizamos o [Teste de Legibilidade de Flesch-Kincaid](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests) (artigo da Wikipedia em inglês).

O teste original foi feito para a língua inglesa. Porém, a fórmula foi adaptada para a língua portuguesa em 1996 pelos pesquisadores Teresa B. F. Martins, Claudete M. Ghiraldelo, M. Graças V. Nunes e Osvaldo N. Oliveira Jr., do Instituto de Ciências Matemáticas e de Computação da USP de São Carlos.

### O que o teste leva em conta?

Tanto a versão original do **Teste de Flesch-Kincaid** quando a versão brasileira levam em conta o **tamanho da frase** e o **tamanho das palavras**: quanto maior, mais difícil de ler.

### Quão preciso é o teste?

A versão original do **Teste de Flesch-Kincaid** precisão de quase 90% - o que, para uso comum, é um valor bastante considerável.
