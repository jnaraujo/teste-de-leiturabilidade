import { Editor } from "@tiptap/react";
import { type LucideIcon, Italic, Bold, Underline } from "lucide-react"

interface ToolbarItem {
  name?: string;
  icon?: LucideIcon;
  tooltip: string;
  onClick: () => void;
}

export const getMenuItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      tooltip: "Itálico",
      onClick: () => editor.chain().focus().toggleItalic().run(),
      icon: Italic,
    },
    {
      tooltip: "Negrito",
      onClick: () => editor.chain().focus().toggleBold().run(),
      icon: Bold,
    },
    {
      tooltip: "Sublinhado",
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      icon: Underline,
    },
  ];
  return items;
};
