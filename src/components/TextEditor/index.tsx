import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent, PureEditorContent } from "@tiptap/react";
import { useWindowSize } from "react-use";
import { useReadingStore } from "@/store/readingStore";
import Toolbar from "./Toolbar";
import { BubbleMenu } from "./BubbleMenu";
import { EditorExtensions, handleContentEase } from "./helper";
import { useContentStore } from "@/store/contentStore";
import { useConfigStore } from "@/store/configStore";
import clsx from "clsx";

type ComponentPropsType = {
  html: string;
};

export default function TextEditor({ html }: ComponentPropsType) {
  const { config } = useConfigStore();
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
          setShouldShowBubbleMenu(false);
        },
      },
    },
    content: content,
  });

  useEffect(() => {
    function handleMouseUp() {
      if (didMouseDown.current) {
        setShouldShowBubbleMenu(true);
      }
      didMouseDown.current = false;
    }

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (html && editor) {
      editor.commands.setContent(html, true);
    }
  }, [html, editor]);

  const shouldBeVisible = width > 720 && shouldShowBubbleMenu;

  return (
    <section
      className={clsx(styles.container, {
        [styles.highlight]: config.highlight,
        [styles.allowTips]: config.tips,
      })}
    >
      <Toolbar editor={editor as any} />
      <EditorContent
        ref={editorRef}
        className={styles.editor}
        editor={editor}
      />

      <BubbleMenu shouldBeVisible={shouldBeVisible} editor={editor} />
    </section>
  );
}
