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
    {
      tooltip: "H1",
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      name: "H1",
    },
    {
      tooltip: "H2",
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      name: "H2",
    },
    {
      tooltip: "H3",
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      name: "H3",
    },
    {
      tooltip: "Parágrafo",
      onClick: () => editor.chain().focus().setParagraph().run(),
      name: "P",
    },
  ];
  return items;
};
