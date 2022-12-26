import { Editor, BubbleMenu } from "@tiptap/react";
import Button from "./Button";
import { ComponentDiv } from "./styles";
import { InTextEditorItems } from "./helper";

interface Props {
  editor: Editor | null;
  isVisibile: boolean;
}

const InlineMenu = ({ editor, isVisibile }: Props) => {
  if (!editor) return null;

  return (
    <BubbleMenu editor={editor}>
      <ComponentDiv className={isVisibile ? "visible" : ""}>
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
