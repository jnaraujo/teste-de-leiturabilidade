/* eslint-disable import/no-extraneous-dependencies */
import { Extension } from "@tiptap/core";
import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { Node } from "prosemirror-model";
import { calculateFleschReading } from "@/libs/readability/ReadingEase";

function easeToLabel(ease: number) {
  if (ease < 33) return "hard";
  if (ease < 66) return "medium";
  return "easy";
}

function textAlDeco(doc: Node) {
  const decorations: Decoration[] = [];

  doc.forEach((node, pos) => {
    if (node.textContent && node.textContent.length > 0) {
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
      return textAlDeco(doc);
    },
    apply(tr, old) {
      return tr.docChanged ? textAlDeco(tr.doc) : old;
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
