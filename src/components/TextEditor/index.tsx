import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";

import { useReadingStore } from "@/store/readingStore";

import Toolbar from "./Toolbar";
import InTextMenu from "./InTextMenu";

import { textExample, EditorExtensions, handleContentEase } from "./helper";

const EditorContainer = dynamic(() => import("./EditorContainer"), {
  ssr: false,
  loading: () => <div>Carregando o editor...</div>,
});

type ComponentPropsType = {
  className?: string;
  html: string;
};

const TextEditor = ({ html, className }: ComponentPropsType) => {
  const setEase = useReadingStore((state) => state.setEase);

  const { width } = useWindowSize();

  const editorRef = useRef(null);

  const editor = useEditor({
    extensions: EditorExtensions,
    onCreate: (state) => {
      if (html) {
        state.editor.commands.setContent(html);
        return;
      }
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
    if (html && editor) {
      editor.commands.setContent(html, true);
    }
  }, [html]);

  return (
    <EditorContainer className={className}>
      <Toolbar editor={editor as any} />
      <EditorContent ref={editorRef} className="editor" editor={editor} />

      <InTextMenu isVisibile={width > 720} editor={editor} />
    </EditorContainer>
  );
};

export default TextEditor;
