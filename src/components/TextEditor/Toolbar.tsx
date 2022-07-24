import styled from "styled-components";
import { Editor } from "@tiptap/react";

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

import EditButton from "./EditButton";

export const Toolbar = styled.div`
  display: flex;
  background-color: #f8f9fa;

  width: 100%;
  height: fit-content;

  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
  border-top: 1px solid #e9ecef;

  .group {
    display: flex;

    align-items: center;

    padding: 0 16px;

    height: 30px;

    gap: 8px;

    &:not(:first-child) {
      border-left: 1px solid #e9ecef;
    }
  }
  .control {
    display: none;
  }
  @media (max-width: 720px) {
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    justify-content: left;

    width: 100vw;

    /* padding: 8px 32px; */

    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.31);

    overflow-x: scroll;

    /* flex-wrap: wrap; */
    border: none;

    margin-bottom: 0;

    .group {
      gap: 12px;
      height: 20px;
      padding: 8px 24px;
    }
  }

  .editButton {
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    color: #6c757d;

    padding: 0 8px;
    cursor: pointer;

    border-radius: 8px;

    transition: color 0.2s ease-in-out;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  .editButton:hover {
    color: #adb5bd;
  }
`;

const ToolbarComponent = ({ editor }: { editor: Editor }) => (
  <Toolbar>
    <div className="group">
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        name="H1"
        tooltip="H1"
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        name="H2"
        tooltip="H2"
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        name="H3"
        tooltip="H3"
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().setParagraph().run();
        }}
        name="P"
        tooltip="Parágrafo"
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().setBlockquote().run();
        }}
        icon={<VscQuote />}
        tooltip="Citação"
      />
    </div>

    <div className="group">
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
        tooltip="Lista com Marcadores"
        icon={<AiOutlineOrderedList />}
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
        tooltip="Lista Numerada"
        icon={<AiOutlineUnorderedList />}
      />
    </div>

    <div className="group">
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
        tooltip="Itálico"
        icon={<AiOutlineItalic />}
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        tooltip="Negrito"
        icon={<AiOutlineBold />}
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().toggleUnderline().run();
        }}
        tooltip="Sublinhado"
        icon={<AiOutlineUnderline />}
      />
    </div>

    <div className="group">
      <EditButton
        onClick={() => {
          editor.chain().focus().setTextAlign("left").run();
        }}
        tooltip="Alinhar à Esquerda"
        icon={<GrTextAlignFull />}
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().setTextAlign("center").run();
        }}
        tooltip="Alinhar ao Centro"
        icon={<GrTextAlignCenter />}
      />
      <EditButton
        onClick={() => {
          editor.chain().focus().setTextAlign("right").run();
        }}
        tooltip="Alinhar à Direita"
        icon={<GrTextAlignLeft />}
      />
    </div>
  </Toolbar>
);

export default ToolbarComponent;
