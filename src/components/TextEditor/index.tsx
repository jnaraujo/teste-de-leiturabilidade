import { useRef, useEffect, useState } from "react";

import ContentEditable from "react-contenteditable";
import cx from "classnames";

import sanitize from "sanitize-html-react";

import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineUnderline,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { VscQuote } from "react-icons/vsc";
import {
  GrTextAlignCenter,
  GrTextAlignFull,
  GrTextAlignLeft,
} from "react-icons/gr";
import { useLeiturabilidade } from "../../context/LeiturabilidadeContext";

import EditButton from "./EditButton";

import * as ReadingEase from "../../libs/readability/ReadingEase.js";
import { EditorDiv, Toolbar } from "./styles";

type ComponentPropsType = {
  className?: string;
  html: string;
};

const textExample = `
  <h1>Ei! Esse é um exemplo de título.</h1> 
  <p>
    Você poder escrever <b>qualquer texto</b> que quiser aqui. <br />
    Além disso, ainda pode importar textos de outros lugares!
  </p>
  <p>
    O texto que você escreve é analisado automaticamente.<br />
    Você pode ver o resultado na barra de ferramentas ao lado.
  </p>
  <blockquote>
    Você também pode formatar o texto com as ferramentas acima. :)
  </blockquote>
  <p>
    Se quiser saber mais sobre como funciona o site, tem mais conteúdo logo abaixo!
  </p>
`;

const Component = ({ html, className }: ComponentPropsType) => {
  const [editorHTML, setEditorHTML] = useState({
    html: textExample,
  });
  const editorRef = useRef(null);
  const { setEase } = useLeiturabilidade();

  const setContent = (content) => {
    setEditorHTML({ html: content });
  };

  const handleEditorChange = (event) => {
    const { value } = event.target;
    if (
      sanitize(value, {
        allowedTags: [],
      }) !== ""
    ) {
      setContent(value);
    } else {
      setContent(`<p> </p>`);
    }
  };

  useEffect(() => {
    const textAnalyses = ReadingEase.fleschReadingEaseBR(
      editorRef.current.innerText
    );

    if (editorHTML.html !== "") {
      localStorage.setItem("text", editorHTML.html);
    }
    setEase({
      index: textAnalyses.result,
      syllables: textAnalyses.totalSyllables,
      words: textAnalyses.totalWords,
      sentences: textAnalyses.nTotalSentences,
    });
  }, [editorHTML]);

  useEffect(() => {
    if (html) {
      setContent(html);
    }
  }, [html]);

  useEffect(() => {
    document.execCommand("defaultParagraphSeparator", false, "p");
    if (localStorage.getItem("text")) {
      setEditorHTML({ html: localStorage.getItem("text") });
    }
  }, []);

  return (
    <EditorDiv
      className={cx({
        [className]: className,
      })}
    >
      <Toolbar>
        <div className="group">
          <EditButton cmd="formatBlock" arg="h1" name="H1" tooltip="H1" />
          <EditButton cmd="formatBlock" arg="h2" name="H2" tooltip="H2" />
          <EditButton cmd="formatBlock" arg="h3" name="H3" tooltip="H3" />
          <EditButton cmd="formatBlock" arg="p" name="P" tooltip="Parágrafo" />
          <EditButton
            cmd="formatBlock"
            arg="blockquote"
            icon={<VscQuote />}
            tooltip="Citação"
          />
        </div>

        <div className="group">
          <EditButton
            tooltip="Lista com Marcadores"
            cmd="insertorderedlist"
            icon={<AiOutlineOrderedList />}
          />
          <EditButton
            tooltip="Lista Numerada"
            cmd="insertunorderedlist"
            icon={<AiOutlineUnorderedList />}
          />
        </div>

        <div className="group">
          <EditButton
            tooltip="Itálico"
            cmd="italic"
            icon={<AiOutlineItalic />}
          />
          <EditButton tooltip="Negrito" cmd="bold" icon={<AiOutlineBold />} />
          <EditButton
            tooltip="Sublinhado"
            cmd="underline"
            icon={<AiOutlineUnderline />}
          />
        </div>

        <div className="group">
          <EditButton
            tooltip="Alinhar à Esquerda"
            cmd="JustifyLeft"
            icon={<GrTextAlignFull />}
          />
          <EditButton
            tooltip="Alinhar ao Centro"
            cmd="JustifyCenter"
            icon={<GrTextAlignCenter />}
          />
          <EditButton
            tooltip="Alinhar à Direita"
            cmd="JustifyRight"
            icon={<GrTextAlignLeft />}
          />
        </div>
      </Toolbar>
      <ContentEditable
        placeholder="Digite aqui..."
        innerRef={editorRef}
        html={editorHTML.html}
        onChange={handleEditorChange}
        className="editor"
      />
    </EditorDiv>
  );
};

export default Component;
