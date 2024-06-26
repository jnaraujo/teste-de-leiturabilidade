/* eslint-disable import/no-extraneous-dependencies */
import { Extension } from "@tiptap/core";
import { Plugin } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import { Node } from "@tiptap/pm/model";
import { calculateFleschReading } from "@/libs/ReadingEase";
import styles from "../styles.module.scss";
import { splitPhrases } from "@/libs/ReadingEase/helper";
import { IEase } from "@/store/readingStore";

function easeToLabel(ease: number) {
  if (ease > 50) return "easy";
  if (ease > 25) return "medium";
  return "hard";
}

/**
 * Essa função gera dicas para a frase de acordo com o resultado do teste
 */
function generateTip({ index, sentences, syllables, words }: IEase) {
  const a = 1.015 * (words / sentences);
  const b = 84.6 * (syllables / words);

  if (index <= 50) {
    if (a > 10 && b > 12) {
      return "A frase é muito longa. Tente dividi-la em duas ou mais frases.";
    } else {
      return "A frase é muito complexa. Tente usar palavras mais simples.";
    }
  }
}

function highlightPhrasesEase(doc: Node) {
  const decorations: Decoration[] = [];

  function addDecoration(start: number, end: number, data: IEase) {
    decorations.push(
      Decoration.inline(start, end, {
        class: styles[`ease-${easeToLabel(data.index)}`],
        "data-tip": generateTip(data),
      }),
    );
  }

  let pos = 0;
  for (let i = 0; i < doc.childCount; i++) {
    const node = doc.child(i);

    if (node.textContent.length > 0) {
      let endOfPhrase = 0;

      if (node.type.name === "blockquote") {
        const ease = calculateFleschReading(node.textContent);
        addDecoration(pos, pos + node.nodeSize, ease);
        pos += node.nodeSize;
        continue;
      }

      const phrases = splitPhrases(node.textContent);

      for (let j = 0; j < phrases.length; j++) {
        const phrase = phrases[j];
        if (phrase.length > 0) {
          endOfPhrase += phrase.length + 1;

          const from = pos + endOfPhrase - phrase.length;
          const to = pos + endOfPhrase;

          const ease = calculateFleschReading(phrase);

          addDecoration(from, to, ease);
        }
      }
    }

    pos += node.nodeSize;
  }

  return DecorationSet.create(doc, decorations);
}

const TextAnalysisHLProse = new Plugin({
  state: {
    init(_, { doc }) {
      return highlightPhrasesEase(doc);
    },
    apply(tr, old) {
      return tr.docChanged ? highlightPhrasesEase(tr.doc) : old;
    },
  },
  props: {
    decorations(state) {
      return (this as any).getState(state);
    },
  },
});

export const TextAnalysisHL = Extension.create({
  name: "textAnalysisHL",
  addProseMirrorPlugins() {
    return [TextAnalysisHLProse];
  },
});
