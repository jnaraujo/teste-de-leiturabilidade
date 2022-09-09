import { memo, useEffect, useRef, useState } from "react";

// RichText.tsx in your components folder
import { useEditor, EditorContent } from "@tiptap/react";

import cx from "classnames";

import useLeiturabilidade from "../../hooks/useLeiturabilidade";

import { textExample, EditorExtensions } from "./helper";
import * as ReadingEase from "../../libs/readability/ReadingEase.js";
import { EditorDiv } from "./styles";

import Toolbar from "./Toolbar";
import InTextMenu from "./InTextMenu";

type ComponentPropsType = {
  className?: string;
  html: string;
};

const handleContentEase = (text, setEase) => {
  const textAnalyses = ReadingEase.fleschReadingEaseBR(text);

  setEase({
    index: textAnalyses.result,
    syllables: textAnalyses.totalSyllables,
    words: textAnalyses.totalWords,
    sentences: textAnalyses.nTotalSentences,
  });
};

const TextEditorComponent = ({ html, className }: ComponentPropsType) => {
  const { setEase } = useLeiturabilidade();
  const [editorConfig] = useState({
    colors: true,
  });

  const editorRef = useRef(null);

  const editor = useEditor({
    extensions: EditorExtensions,
    onCreate: (state) => {
      if (localStorage.getItem("text")) {
        state.editor.commands.setContent(localStorage.getItem("text"));
      }
      handleContentEase(state.editor.getText(), setEase);
    },
    onUpdate: (state) => {
      localStorage.setItem("text", state.editor.getHTML());
      handleContentEase(state.editor.getText(), setEase);
    },
    content: textExample,
  });

  useEffect(() => {
    if (html) {
      editor.commands.setContent(html);
    }
  }, [html]);

  return (
    <EditorDiv
      className={cx({
        [className]: className,
        editorColor: editorConfig.colors,
      })}
    >
      <Toolbar editor={editor} />

      <EditorContent ref={editorRef} className="editor" editor={editor} />

      {editor && <InTextMenu editor={editor} />}
    </EditorDiv>
  );
};

export default memo(TextEditorComponent);
