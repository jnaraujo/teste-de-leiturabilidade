import styled from "styled-components";
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

const ToolbarComponent = () => (
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
      <EditButton tooltip="Itálico" cmd="italic" icon={<AiOutlineItalic />} />
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
);

export default ToolbarComponent;
