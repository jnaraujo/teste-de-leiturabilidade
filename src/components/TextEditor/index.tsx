import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { useWindowSize } from "react-use";

import { useReadingStore } from "@/store/readingStore";

import Toolbar from "./Toolbar";
import InlineMenu from "./InlineMenu";

import { textExample, EditorExtensions, handleContentEase } from "./helper";
import EditorContainer from "./EditorContainer";
import { useContentStore } from "@/store/contentStore";

type ComponentPropsType = {
  className?: string;
  html: string;
};

const TextEditor = ({ html, className }: ComponentPropsType) => {
  const setEase = useReadingStore((state) => state.setEase);
  const { content, setContent } = useContentStore();

  const { width } = useWindowSize();
  const editorRef = useRef(null);

  const editor = useEditor({
    extensions: EditorExtensions,
    onCreate: (state) => {
      if (html) {
        state.editor.commands.setContent(html);
        return;
      }
      if (content) {
        state.editor.commands.setContent(content);
      }
      handleContentEase(state.editor.getText(), setEase);
    },
    onUpdate: (state) => {
      setContent(state.editor.getHTML());
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
    <EditorContainer className={className ? className : ""}>
      <Toolbar editor={editor as any} />
      <EditorContent ref={editorRef} className="editor" editor={editor} />

      <InlineMenu isActive={width > 720} editor={editor} />
    </EditorContainer>
  );
};

export default TextEditor;
