import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";

import { getLocalStorage, setLocalStorage } from "@/libs/localstorage";
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
      if (getLocalStorage("text").text) {
        state.editor.commands.setContent(getLocalStorage("text").text);
      }
      handleContentEase(state.editor.getText(), setEase);
    },
    onUpdate: (state) => {
      setLocalStorage("text", {
        text: state.editor.getText(),
      });
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
