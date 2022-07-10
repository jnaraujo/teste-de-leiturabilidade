import { useRef, useEffect } from "react";
import styled from "styled-components";

import { useLeiturabilidade } from "../context/LeiturabilidadeContext";

import * as ReadingEase from "../libs/readability/ReadingEase.js";

const EditorDiv = styled.div`
  font-family: "Merriweather", serif;
  font-size: 16px;
  font-weight: 400;
  color: $black;
  line-height: 1.75;

  width: 100%;
  height: 100%;

  background-color: transparent;
  overflow: hidden;
  overflow-y: scroll;
  resize: none;
  border: none;

  padding: 0 0px 0 0;

  figure {
    div {
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  img,
  figure {
    width: 90% !important;
    height: auto;
    margin: 0 auto !important;
    padding: 0 !important;
  }
  &:focus {
    outline: none !important;
    border: none;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    padding-bottom: 0;
    border: none;
  }
  &:empty:before {
    content: attr(placeholder);
    position: absolute;
    color: gray;
    background-color: transparent;
  }
`;

type ComponentPropsType = {
  className?: string;
  html: string;
};

const Component = ({ html, className }: ComponentPropsType) => {
  const editorRef = useRef(null);
  const { setEase } = useLeiturabilidade();

  const handleEditorChange = () => {
    if (editorRef.current.innerText !== "") {
      const textAnalyses = ReadingEase.fleschReadingEaseBR(
        editorRef.current.innerText
      );

      setEase({
        index: textAnalyses.result,
        syllables: textAnalyses.totalSyllables,
        words: textAnalyses.totalWords,
        sentences: textAnalyses.nTotalSentences,
      });
      localStorage.setItem("text", editorRef.current.innerHTML);
    }
  };
  useEffect(() => {
    if (html) {
      editorRef.current.innerHTML = html;
    }
    handleEditorChange();
  }, [html]);

  useEffect(() => {
    editorRef.current.innerHTML = localStorage.getItem("text") ?? "";
  }, []);

  return (
    <EditorDiv
      placeholder="Digite teu texto..."
      contentEditable
      ref={editorRef}
      onInput={handleEditorChange}
      className={className && className}
    />
  );
};

export default Component;
