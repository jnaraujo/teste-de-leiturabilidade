import { getLocalStorage, setLocalStorage } from "@/libs/localstorage";
import { create } from "zustand";

export interface IContentStore {
  content: string;
  setContent: (content: string) => void;
}

const textExample = `
  <h1>Ei! Esse é um exemplo de título.</h1> 
  <p>
    Você poder escrever <b>qualquer texto</b> que quiser aqui. <br />
    Além disso, ainda pode importar textos de outros lugares!
  </p>
  <p>
    O texto que você escreve é analisado automaticamente.<br />
    Você pode ver o resultado na barra de ferramentas ao lado.
  </p>
  <blockquote>
    Você também pode formatar o texto com as ferramentas acima. :)
  </blockquote>
  <p>
    Se quiser saber mais sobre como funciona o site, tem mais conteúdo logo abaixo!
  </p>
`;

export const useContentStore = create<IContentStore>((set) => ({
  content: getLocalStorage("content-store").content || textExample,
  setContent: (content: string) => {
    set({ content });
    setLocalStorage("content-store", {
      content,
    });
  },
}));