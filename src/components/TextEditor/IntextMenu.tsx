import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import styled from "styled-components";
import EditButton from "./EditButton";

const ComponentDiv = styled.div<{
  isActive: boolean;
  x: number;
  y: number;
}>`
  --vWidth: 300px;
  --vHeight: 30px;

  position: absolute;

  top: calc(${(props) => props.y}px - var(--vHeight) - 20px);
  left: calc(${(props) => props.x}px - var(--vWidth) / 2);

  @media (max-width: 768px) {
    --vHeight: 40px;
    --vWidth: 320px;

    top: calc(${(props) => props.y}px - var(--vHeight) - 20px);
    left: calc(100vw / 2 - var(--vWidth) / 2);
  }

  width: var(--vWidth);
  height: var(--vHeight);

  background-color: #e9ecef;

  display: ${(props) => (props.isActive ? "block" : "none")};

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

const IntextMenu = ({
  isActive,
  x,
  y,
}: {
  isActive: boolean;
  x: number;
  y: number;
}) => (
  <ComponentDiv x={x} y={y} isActive={isActive}>
    <ul>
      <li>
        <EditButton tooltip="Itálico" cmd="italic" icon={<AiOutlineItalic />} />
      </li>
      <li>
        <EditButton tooltip="Negrito" cmd="bold" icon={<AiOutlineBold />} />
      </li>
      <li>
        <EditButton
          tooltip="Sublinhado"
          cmd="underline"
          icon={<AiOutlineUnderline />}
        />
      </li>

      <li>
        <EditButton cmd="formatBlock" arg="h1" name="H1" tooltip="H1" />
      </li>
      <li>
        <EditButton cmd="formatBlock" arg="h2" name="H2" tooltip="H2" />
      </li>
      <li>
        <EditButton cmd="formatBlock" arg="h3" name="H3" tooltip="H3" />
      </li>
      <li>
        <EditButton cmd="formatBlock" arg="p" name="P" tooltip="Parágrafo" />
      </li>
    </ul>
  </ComponentDiv>
);
export default IntextMenu;
