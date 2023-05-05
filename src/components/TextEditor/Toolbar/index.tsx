import { Editor } from "@tiptap/react";

import {
  getToolbarGroups,
  isActive,
} from "./helper";

import styles from "./styles.module.scss";
import Button from "./Button";

const Toolbar = ({ editor }: { editor: Editor }) => (
  <div className={styles.toolbar}>
    {getToolbarGroups(editor).map((items, index) => (
      <div key={`group ${index}`} className={styles.group}>
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
  </div>
);

export default Toolbar;
