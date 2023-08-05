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
import styles from "./styles.module.scss";

import * as ReadingEase from "../../libs/ReadingEase";
import { TextAnalysisHL } from "./plugins/TextAnalysisHL/textAnalysisHL";
import { IEase } from "@/store/readingStore";
import { splitPhrases } from "./plugins/TextAnalysisHL/helper";
import { calculateFleschEase } from "@/libs/ReadingEase/helper";

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
    emptyNodeClass: styles.emptyNodeClass,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

export const handleContentEase = (
  text: string,
  setEase: (obj: IEase) => void
) => {
  const phrases = splitPhrases(text);

  let textAnalyses = {
    result: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  };
  for (let i = 0; i < phrases.length; i++) {
    const phraseAnalyses = ReadingEase.calculateFleschReading(phrases[i]);
    textAnalyses.syllables += phraseAnalyses.syllables;
    textAnalyses.words += phraseAnalyses.words;
    textAnalyses.sentences += phraseAnalyses.sentences;
  }

  setEase({
    index: calculateFleschEase(textAnalyses.words, textAnalyses.sentences, textAnalyses.syllables),
    syllables: textAnalyses.syllables,
    words: textAnalyses.words,
    sentences: textAnalyses.sentences,
  });
};

export const calculateReadingEase = (text: string) => {
  const textAnalyses = ReadingEase.calculateFleschReading(text);

  return textAnalyses.result;
};
