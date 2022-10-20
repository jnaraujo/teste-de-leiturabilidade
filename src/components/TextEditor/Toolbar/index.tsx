import { memo } from "react";
import { Editor } from "@tiptap/react";

import EditButton from "../EditButton";

import {
  ListFormattingItems,
  TextAlignItems,
  TextFormattingItems,
  TextTagsItems,
} from "./helper";

import { Toolbar } from "./styles";

const ToolbarComponent = ({ editor }: { editor: Editor }) => (
  <Toolbar>
    <div className="group">
      {TextTagsItems(editor).map((item) => (
        <EditButton
          key={item.name || item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          name={item?.name}
          icon={item.icon && <item.icon />}
        />
      ))}
    </div>

    <div className="group">
      {ListFormattingItems(editor).map((item) => (
        <EditButton
          key={item.name || item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          name={item?.name}
          icon={item.icon && <item.icon />}
        />
      ))}
    </div>

    <div className="group">
      {TextFormattingItems(editor).map((item) => (
        <EditButton
          key={item.name || item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          name={item?.name}
          icon={item.icon && <item.icon />}
        />
      ))}
    </div>

    <div className="group">
      {TextAlignItems(editor).map((item) => (
        <EditButton
          key={item.name || item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          name={item?.name}
          icon={item.icon && <item.icon />}
        />
      ))}
    </div>
  </Toolbar>
);

export default memo(ToolbarComponent);
