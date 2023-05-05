import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent, PureEditorContent } from "@tiptap/react";
import { useWindowSize } from "react-use";
import styles from "./styles.module.scss";

import { useReadingStore } from "@/store/readingStore";

import Toolbar from "./Toolbar";
import { BubbleMenu } from "./BubbleMenu";

import { textExample, EditorExtensions, handleContentEase } from "./helper";
import EditorContainer from "./EditorContainer";
import { useContentStore } from "@/store/contentStore";

type ComponentPropsType = {
  html: string;
};

export default function TextEditor({ html }: ComponentPropsType) {
  const setEase = useReadingStore((state) => state.setEase);
  const { content, setContent } = useContentStore();

  const { width } = useWindowSize();
  const editorRef = useRef<PureEditorContent | null>(null);

  const didMouseDown = useRef(false);
  const [shouldShowBubbleMenu, setShouldShowBubbleMenu] = useState(false);

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
    editorProps: {
      handleDOMEvents: {
        mousedown() {
          didMouseDown.current = true;
          setShouldShowBubbleMenu(false)
        },
      }
    },
    content: textExample,
  });

  useEffect(() => {
    function handleMouseUp() {
      if (didMouseDown.current) {
        setShouldShowBubbleMenu(true)
      }
      didMouseDown.current = false;
    }

    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, []);

  useEffect(() => {
    if (html && editor) {
      editor.commands.setContent(html, true);
    }
  }, [html]);

  const shouldBeVisible = width > 720 && shouldShowBubbleMenu;

  return (
    <EditorContainer>
      <Toolbar editor={editor as any} />
      <EditorContent ref={editorRef} className={styles.editor} editor={editor} />

      {/* <BubbleMenu shouldBeVisible={shouldBeVisible} editor={editor} /> */}
    </EditorContainer>
  );
};