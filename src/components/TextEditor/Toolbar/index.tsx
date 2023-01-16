import { Editor } from "@tiptap/react";

import {
  isActive,
  ToolbarGroups,
} from "./helper";

import { Toolbar } from "./styles";
import Button from "./Button";

const ToolbarComponent = ({ editor }: { editor: Editor }) => (
  <Toolbar>
    {ToolbarGroups.map((group, index) => (
      <div key={`group ${index}`} className="group">
        {group(editor).map((item) => (
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
