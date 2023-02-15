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

  doc.forEach((node, pos) => {
    if (node.textContent.length > 0) {
      let totalPos = 0;
      node.textContent.split(".").forEach((word) => {
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
