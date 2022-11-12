import { memo } from "react";
import { Editor } from "@tiptap/react";

import {
  EditingControlItems,
  isActive,
  TextAlignItems,
  TextFormattingItems,
  TextTagsItems,
} from "./helper";

import { Toolbar } from "./styles";
import Button from "./Button";

const ToolbarComponent = ({ editor }: { editor: Editor }) => (
  <Toolbar>
    <div className="group">
      {TextTagsItems(editor).map((item) => (
        <Button
          key={item.name + item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          isActive={isActive(
            editor,
            item.isActive?.name,
            item.isActive?.attributes
          )}
        >
          {item.icon ? <item.icon /> : item.name}
        </Button>
      ))}
    </div>

    <div className="line" />

    <div className="group">
      {TextFormattingItems(editor).map((item) => (
        <Button
          key={item.name + item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          isActive={isActive(
            editor,
            item.isActive?.name,
            item.isActive?.attributes
          )}
        >
          {item.icon ? <item.icon /> : item.name}
        </Button>
      ))}
    </div>

    <div className="line" />

    <div className="group">
      {TextAlignItems(editor).map((item) => (
        <Button
          key={item.name + item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          isActive={isActive(
            editor,
            item.isActive?.name,
            item.isActive?.attributes
          )}
        >
          {item.icon ? <item.icon /> : item.name}
        </Button>
      ))}
    </div>

    <div className="line" />

    <div className="group">
      {EditingControlItems(editor).map((item) => (
        <Button
          key={item.name + item.tooltip}
          onClick={item.onClick}
          tooltip={item.tooltip}
          isActive={isActive(
            editor,
            item.isActive?.name,
            item.isActive?.attributes
          )}
        >
          {item.icon ? <item.icon /> : item.name}
        </Button>
      ))}
    </div>
  </Toolbar>
);

export default ToolbarComponent;
