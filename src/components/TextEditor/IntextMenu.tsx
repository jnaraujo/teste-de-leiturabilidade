import { Editor, BubbleMenu } from "@tiptap/react";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import styled from "styled-components";
import EditButton from "./EditButton";

const ComponentDiv = styled.div`
  position: relative;
  --vWidth: 300px;
  --vHeight: 30px;

  @media (max-width: 768px) {
    --vHeight: 40px;
    --vWidth: 320px;
  }

  width: var(--vWidth);
  height: var(--vHeight);

  background-color: #e9ecef;

  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.11);

  border-radius: 8px;
  overflow: hidden;

  ul {
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    list-style: none;
    width: 100%;
    gap: 2px;
    li {
      all: unset;
      width: 100%;

      height: var(--vHeight);

      button {
        all: unset;
        width: 100%;
        height: 100%;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #f8f9fa;

        transition: background-color 0.2s ease-in-out;

        cursor: pointer;

        &:hover {
          background-color: #adb5bd;
        }

        div,
        p {
          all: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

const IntextMenu = ({ editor }: { editor: Editor }) => (
  <BubbleMenu editor={editor}>
    <ComponentDiv>
      <ul>
        <li>
          <EditButton
            onClick={() => {
              editor.chain().focus().toggleItalic().run();
            }}
            tooltip="Itálico"
            cmd="italic"
            icon={<AiOutlineItalic />}
          />
        </li>
        <li>
          <EditButton
            onClick={() => {
              editor.chain().focus().toggleBold().run();
            }}
            tooltip="Negrito"
            cmd="bold"
            icon={<AiOutlineBold />}
          />
        </li>
        <li>
          <EditButton
            onClick={() => {
              editor.chain().focus().toggleUnderline().run();
            }}
            tooltip="Sublinhado"
            cmd="underline"
            icon={<AiOutlineUnderline />}
          />
        </li>

        <li>
          <EditButton
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            cmd="formatBlock"
            arg="h1"
            name="H1"
            tooltip="H1"
          />
        </li>
        <li>
          <EditButton
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
            cmd="formatBlock"
            arg="h2"
            name="H2"
            tooltip="H2"
          />
        </li>
        <li>
          <EditButton
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            cmd="formatBlock "
            arg="h3"
            name="H3"
            tooltip="H3"
          />
        </li>
        <li>
          <EditButton
            onClick={() => {
              editor.chain().focus().setParagraph().run();
            }}
            cmd="formatBlock"
            arg="p"
            name="P"
            tooltip="Parágrafo"
          />
        </li>
      </ul>
    </ComponentDiv>
  </BubbleMenu>
);
export default IntextMenu;
