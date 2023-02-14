import { Editor } from "@tiptap/react";

import {
  getToolbarGroups,
  isActive,
} from "./helper";

import { Toolbar } from "./styles";
import Button from "./Button";

const ToolbarComponent = ({ editor }: { editor: Editor }) => (
  <Toolbar>
    {getToolbarGroups(editor).map((items, index) => (
      <div key={`group ${index}`} className="group">
        {items.map((item) => (
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
    ))}
  </Toolbar>
);

export default ToolbarComponent;
