import styles from "./styles.module.scss";
import editorStyles from "../shared/editor.module.scss";
import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { useWindowSize } from "react-use";
import { useReadingStore } from "@/store/readingStore";
import Toolbar from "./Toolbar";
import { EditorExtensions, handleContentEase } from "../shared/helper";
import { useContentStore } from "@/store/contentStore";
import { useConfigStore } from "@/store/configStore";
import clsx from "clsx";
import { useStatsStore } from "@/store/statsStore";
import { BubbleMenu } from "../shared/BubbleMenu";

type ComponentPropsType = {
  html: string;
};

export default function TextEditor({ html }: ComponentPropsType) {
  const setEase = useReadingStore((state) => state.setEase);
  const { config } = useConfigStore();

  const { setTimeWritingInSecs, timeWrittingInSecs } = useStatsStore();

  const startedWritingAt = useRef(0);
  const writtingTimeout = useRef<any>();
  const { content, setContent } = useContentStore();

  const { width } = useWindowSize();

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

      if (startedWritingAt.current === 0) {
        startedWritingAt.current = Date.now();
      }

      if (writtingTimeout.current) {
        clearTimeout(writtingTimeout.current);
      }

      writtingTimeout.current = setTimeout(() => {
        const timeInMs = Date.now() - startedWritingAt.current;
        const timeWithoutDelay = timeInMs - 1000;
        const timeInSecs = timeWithoutDelay / 1000;
        setTimeWritingInSecs(timeWrittingInSecs + timeInSecs);
        startedWritingAt.current = 0;
        console.log("timeInSecs", timeInSecs);
      }, 1000);
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
      className={clsx(editorStyles.container, styles.container, {
        [editorStyles.highlight]: config.highlight,
        [editorStyles.allowTips]: config.tips,
      })}
    >
      <Toolbar editor={editor as any} />
      <EditorContent
        className={`${styles.editor} ${editorStyles.editor}`}
        editor={editor}
      />

      <BubbleMenu shouldBeVisible={shouldBeVisible} editor={editor} />
    </section>
  );
}
