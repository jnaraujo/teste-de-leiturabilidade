import { Editor } from "@tiptap/react";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface ToolbarItem {
  name?: string;
  icon?: IconType;
  tooltip: string;
  onClick: () => void;
}

export const getMenuItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      tooltip: "Itálico",
      onClick: () => editor.chain().focus().toggleItalic().run(),
      icon: AiOutlineItalic,
    },
    {
      tooltip: "Negrito",
      onClick: () => editor.chain().focus().toggleBold().run(),
      icon: AiOutlineBold,
    },
    {
      tooltip: "Sublinhado",
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      icon: AiOutlineUnderline,
    },
  ];
  return items;
};
