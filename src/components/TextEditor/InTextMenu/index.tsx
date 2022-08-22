import React, { memo } from "react";
import { Editor, BubbleMenu } from "@tiptap/react";
import EditButton from "../EditButton";

import { ComponentDiv } from "./styles";
import { InTextEditorItems } from "./helper";

const InTextMenu = ({ editor }: { editor: Editor }) => (
  <BubbleMenu editor={editor}>
    <ComponentDiv>
      <ul>
        {InTextEditorItems(editor).map((item) => (
          <li>
            <EditButton
              key={item.name || item.tooltip}
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
export default memo(InTextMenu);
