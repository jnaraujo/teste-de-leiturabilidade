import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Document from "@tiptap/extension-document";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import History from "@tiptap/extension-history";

import { TextAnalysisHL } from "./TextAnalysisHL/textAnalysisHL";

export const EditorExtensions = [
  Heading,
  Underline,
  BulletList,
  OrderedList,
  Blockquote,
  ListItem,
  Text,
  Bold,
  Italic,
  Paragraph,
  Document,
  TextAnalysisHL,
  History.configure({
    depth: 20,
  }),
  Placeholder.configure({
    placeholder: "Digite aqui seu texto...",
    emptyNodeClass: `before:content-[attr(data-placeholder)] before:float-left before:h-0 before:pointer-events-none before:text-zinc-300 before:dark:text-zinc-600`,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];
