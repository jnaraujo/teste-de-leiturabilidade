import { useRef, useEffect, useState } from "react";

import cx from "classnames";

import sanitize from "sanitize-html-react";

import { useLeiturabilidade } from "../../context/LeiturabilidadeContext";

import { textExample } from "./helper";
import * as ReadingEase from "../../libs/readability/ReadingEase.js";
import { EditorDiv } from "./styles";

import Toolbar from "./Toolbar";
import { useWindowSize } from "react-use";

type ComponentPropsType = {
  className?: string;
  html: string;
};

function easeResultToTag(value) {
  if (value > 75) return "ease_easy";
  // if (value > 50) return "um estudante do 6º ao 9º ano";
  if (value > 25) return "ease_medium";

  return "ease_hard";
}

const Component = ({ html, className }: ComponentPropsType) => {
  const { width, height } = useWindowSize();
  const editorRef = useRef(null);
  const { setEase } = useLeiturabilidade();
  const [editorConfig] = useState({
    colors: true,
  });

  function textAnalizer(editorReference) {
    const nodes = editorReference.current.childNodes;

    if (nodes.length === 0) {
      return;
    }

    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];

      if (node.nodeType === 1) {
        const analysis = ReadingEase.fleschReadingEaseBR(node.textContent);
        const result = easeResultToTag(analysis.result);

        (node as any).classList.remove(...(node as any).classList);

        if (node.textContent !== "") {
          (node as any).classList.add(result);
        }
      }
    }
  }

  const setEditorContent = (content) => {
    editorRef.current.innerHTML = content;
  };

  const handleContentEase = () => {
    const textAnalyses = ReadingEase.fleschReadingEaseBR(
      editorRef.current.innerText
    );

    setEase({
      index: textAnalyses.result,
      syllables: textAnalyses.totalSyllables,
      words: textAnalyses.totalWords,
      sentences: textAnalyses.nTotalSentences,
    });
  };

  const handleEditorChange = () => {
    textAnalizer(editorRef);

    const value = editorRef.current.innerText;
    if (value === "") {
      setEditorContent(`<p> </p>`);
    }
    if (editorRef.current.innerHTML !== "") {
      localStorage.setItem("text", editorRef.current.innerHTML);
    }

    handleContentEase();
  };

  useEffect(() => {
    if (html) {
      setEditorContent(html);
      handleEditorChange();
    }
  }, [html]);

  useEffect(() => {
    document.execCommand("defaultParagraphSeparator", false, "p");

    // editorRef.current.addEventListener("keydown", (event) => {
    //   if (event.key === "Enter") {
    //     event.preventDefault();
    //     document.execCommand("insertHTML", false, "<br>");
    //   }
    // });

    if (
      sanitize(localStorage.getItem("text"), {
        allowedTags: [],
      }).replace(/\s/g, "") !== ""
    ) {
      setEditorContent(localStorage.getItem("text"));
    } else {
      setEditorContent(textExample);
    }
    handleEditorChange();
  }, []);

  return (
    <EditorDiv
      className={cx({
        [className]: className,
        editorColor: editorConfig.colors,
      })}
    >
      <Toolbar />

      <div
        contentEditable
        className="editor"
        ref={editorRef}
        onInput={handleEditorChange}
      />
    </EditorDiv>
  );
};

export default Component;
