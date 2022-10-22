/* eslint-disable import/no-extraneous-dependencies */
import { Extension } from "@tiptap/core";
import ReadingEase from "@/libs/readability/ReadingEase";
import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { Node } from "prosemirror-model";

function easeToColor(ease: number) {
  if (ease < 20) return "hard";
  if (ease < 50) return "medium";
  return "easy";
}

function textAlDeco(doc: Node) {
  const decorations: Decoration[] = [];

  doc.descendants((node, pos) => {
    if (node.isText) {
      const ease = ReadingEase.fleschReadingEaseBR(node.text).result;
      const color = easeToColor(ease);
      const decoration = Decoration.inline(pos, pos + node.nodeSize, {
        class: `ease-${color}`,
      });
      decorations.push(decoration);
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
      return this.getState(state);
    },
  },
});

export const TextAnalysisHL = Extension.create({
  name: "textAnalysisHL",
  addProseMirrorPlugins() {
    return [TextAnalysisHLProse];
  },
});
