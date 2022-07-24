import { useEffect, useRef, useState } from "react";

// RichText.tsx in your components folder
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

import cx from "classnames";

import { useLeiturabilidade } from "../../context/LeiturabilidadeContext";

import { textExample } from "./helper";
import * as ReadingEase from "../../libs/readability/ReadingEase.js";
import { EditorDiv } from "./styles";

import Toolbar from "./Toolbar";
import IntextMenu from "./IntextMenu";

type ComponentPropsType = {
  className?: string;
  html: string;
};

// function easeResultToTag(value) {
//   if (value > 75) return "ease_easy";
//   // if (value > 50) return "um estudante do 6º ao 9º ano";
//   if (value > 25) return "ease_medium";

//   return "ease_hard";
// }

// const ease_classes = ["ease_easy", "ease_medium", "ease_hard"];

const handleContentEase = (text, setEase) => {
  const textAnalyses = ReadingEase.fleschReadingEaseBR(text);

  setEase({
    index: textAnalyses.result,
    syllables: textAnalyses.totalSyllables,
    words: textAnalyses.totalWords,
    sentences: textAnalyses.nTotalSentences,
  });
};

const Component = ({ html, className }: ComponentPropsType) => {
  const { setEase } = useLeiturabilidade();
  const [editorConfig] = useState({
    colors: true,
  });

  const editorRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Document,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    onCreate: (state) => {
      if (localStorage.getItem("text")) {
        state.editor.commands.setContent(localStorage.getItem("text"));
      }
      handleContentEase(state.editor.getText(), setEase);
    },
    onUpdate: (state) => {
      localStorage.setItem("text", state.editor.getHTML());

      handleContentEase(state.editor.getText(), setEase);
      // textAnalizer(editorRef);
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

      {/* <div
        contentEditable
        className="editor"
        ref={editorRef}
        onInput={handleEditorChange}
      /> */}
      {editor && <IntextMenu editor={editor} />}
    </EditorDiv>
  );
};

export default Component;
