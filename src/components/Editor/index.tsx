"use client";

import type { Editor } from "@tiptap/core";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { useWindowSize } from "react-use";
import { useReadingStore } from "@/store/readingStore";
import { EditorExtensions } from "./helper";
import { contentStore } from "@/store/contentStore";
import { useConfigStore } from "@/store/configStore";
import clsx from "clsx";
import { useStatsStore } from "@/store/statsStore";
import { BubbleMenu } from "./BubbleMenu";
import { cn } from "@/libs/utils";
import Toolbar from "./Toolbar";
import { calculateFleschReadingFromText } from "@/libs/ReadingEase";
import useDebounce from "@/hooks/use-debounce";

type ComponentPropsType = {
  html?: string;
  isPro?: boolean;
  stickyToolBarOnTop?: boolean;
};

export default function TextEditor({
  html,
  isPro = false,
  stickyToolBarOnTop = false,
}: ComponentPropsType) {
  const { setEase } = useReadingStore();
  const { config } = useConfigStore();

  const { setTimeWritingInSecs, timeWritingInSecs } = useStatsStore();

  const startedWritingAt = useRef(0);
  const writingTimeout = useRef<any>();

  const { width } = useWindowSize();

  const didMouseDown = useRef(false);
  const [shouldShowBubbleMenu, setShouldShowBubbleMenu] = useState(false);

  const saveContentDebounce = useDebounce(
    (editor: Editor) => {
      console.log("Saving content...");

      contentStore.setContent(editor.getHTML());

      const text = editor.getText();
      const ease = calculateFleschReadingFromText(text);

      setEase(ease);
    },
    200,
    [],
  );

  const editor = useEditor({
    extensions: EditorExtensions,
    onCreate: (state) => {
      if (html) {
        state.editor.commands.setContent(html);
        return;
      }
      const text = state.editor.getText();
      const ease = calculateFleschReadingFromText(text);

      setEase(ease);
    },
    onUpdate: (state) => {
      saveContentDebounce(state.editor);

      if (startedWritingAt.current === 0) {
        startedWritingAt.current = Date.now();
      }

      if (writingTimeout.current) {
        clearTimeout(writingTimeout.current);
      }

      writingTimeout.current = setTimeout(() => {
        const timeInMs = Date.now() - startedWritingAt.current;
        const timeWithoutDelay = timeInMs - 1000;
        const timeInSecs = timeWithoutDelay / 1000;
        setTimeWritingInSecs(timeWritingInSecs + timeInSecs);
        startedWritingAt.current = 0;
      }, 1000);
    },
    editorProps: {
      handleDOMEvents: {
        mousedown() {
          didMouseDown.current = true;
          setShouldShowBubbleMenu(false);
        },
      },
      attributes: {
        class: "outline-none space-y-2 leading-6",
      },
    },
    content: contentStore.content,
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
      className={clsx("top-4 mb-8 h-full w-full", styles.container, {
        [styles.highlight]: config.highlight,
        [styles.allowTips]: config.tips,
      })}
    >
      <Toolbar
        editor={editor as any}
        isPro={isPro}
        stickyToolBarOnTop={stickyToolBarOnTop}
        className="mb-3"
      />

      <EditorContent
        className={cn(styles.editor, "text-zinc-700 dark:text-stone-400")}
        editor={editor}
      />

      <BubbleMenu shouldBeVisible={shouldBeVisible} editor={editor} />
    </section>
  );
}
