import { BubbleMenu, Editor } from "@tiptap/react";
import Button from "./Button";
import { ComponentDiv } from "./styles";
import { InTextEditorItems } from "./helper";
import cx from "classnames";

interface Props {
  editor: Editor | null;
  isActive: boolean;
}

const InlineMenu = ({ editor, isActive }: Props) => {
  if (!editor) return null;

  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        delay: 250,
        offset: [0, 25],
      }}
      editor={editor}
    >
      <ComponentDiv
        className={cx("bubble-menu-container", {
          visible: isActive,
        })}
      >
        <ul>
          {InTextEditorItems(editor).map((item) => (
            <li key={item.tooltip}>
              <Button
                onClick={item.onClick}
                tooltip={item.tooltip}
                name={item?.name}
                icon={item.icon && <item.icon />}
              />
            </li>
          ))}
        </ul>
      </ComponentDiv>
    </BubbleMenu>
  );
};
export default InlineMenu;
