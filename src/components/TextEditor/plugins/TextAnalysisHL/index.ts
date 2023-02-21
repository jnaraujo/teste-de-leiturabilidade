/* eslint-disable import/no-extraneous-dependencies */
import { Extension } from "@tiptap/core";
import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { Node } from "prosemirror-model";
import { calculateFleschReading } from "@/libs/ReadingEase";

function easeToLabel(ease: number) {
  if (ease > 50) return "easy";
  if (ease > 25) return "medium";
  return "hard";
}

/**
 * Split by punctuation followed by space. Supports: . ! ?
 * @param text
 * @returns
 */
function splitPhrases(text: string) {
  const regex = /(?<=[.?!])\s/g;
  return text.split(regex);
}

function highlightWordsEase(doc: Node) {
  const decorations: Decoration[] = [];

  doc.forEach((node, pos) => {
    if (node.textContent.length > 0) {
      let totalPos = 0;
      node.textContent.split(" ").forEach((word) => {
        totalPos += word.length + 1;
        if (word.length > 0) {
          const ease = calculateFleschReading(word).result;
          decorations.push(
            Decoration.inline(pos + totalPos - word.length, pos + totalPos, {
              class: `ease-${easeToLabel(ease)}`,
            })
          );
        }
      });
    }
  });

  return DecorationSet.create(doc, decorations);
}

function highlightPhrasesEase(doc: Node) {
  const decorations: Decoration[] = [];

  function addDecoration(start: number, end: number, ease: number) {
    decorations.push(
      Decoration.inline(start, end, {
        class: `ease-${easeToLabel(ease)}`,
      })
    );
  }

  console.clear();

  doc.forEach((node, pos) => {
    if (node.textContent.length > 0) {
      let endOfPhrase = 0;

      if (node.type.name === "blockquote") {
        const ease = calculateFleschReading(node.textContent).result;
        addDecoration(pos, pos + node.nodeSize, ease);
      } else {
        splitPhrases(node.textContent).forEach((phrase) => {
          if (phrase.length > 0) {
            endOfPhrase += phrase.length + 1;

            const from = pos + endOfPhrase - phrase.length;
            const to = pos + endOfPhrase;

            const ease = calculateFleschReading(phrase).result;

            addDecoration(from, to, ease);
          }
        });
      }
    }
  });

  return DecorationSet.create(doc, decorations);
}

function highlightParagraphEase(doc: Node) {
  const decorations: Decoration[] = [];

  doc.forEach((node, pos) => {
    if (node.textContent.length > 0) {
      const ease = calculateFleschReading(node.textContent).result;
      decorations.push(
        Decoration.inline(pos, pos + node.nodeSize, {
          class: `ease-${easeToLabel(ease)}`,
        })
      );
    }
  });

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
