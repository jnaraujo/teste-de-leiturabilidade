import { Editor } from "@tiptap/react";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineUnderline,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  GrTextAlignCenter,
  GrTextAlignFull,
  GrTextAlignLeft,
} from "react-icons/gr";
import { VscQuote } from "react-icons/vsc";
import { IconType } from "react-icons/lib";

interface ToolbarItem {
  name?: string;
  icon?: IconType;
  tooltip: string;
  onClick: () => void;
}
export const TextTagsItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      name: "H1",
      tooltip: "H1",
    },
    {
      name: "H2",
      tooltip: "H2",
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      name: "H3",
      tooltip: "H3",
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      name: "P",
      tooltip: "Parágrafo",
      onClick: () => editor.chain().focus().setParagraph().run(),
    },
    {
      icon: VscQuote,
      tooltip: "Citação",
      onClick: () => editor.chain().focus().setBlockquote().run(),
    },
  ];
  return items;
};

export const ListFormattingItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      tooltip: "Lista com Marcadores",
      icon: AiOutlineUnorderedList,
    },
    {
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      tooltip: "Lista Numerada",
      icon: AiOutlineOrderedList,
    },
  ];
  return items;
};

export const TextFormattingItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      tooltip: "Itálico",
      icon: AiOutlineItalic,
    },
    {
      onClick: () => editor.chain().focus().toggleBold().run(),
      tooltip: "Negrito",
      icon: AiOutlineBold,
    },
    {
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      tooltip: "Sublinhado",
      icon: AiOutlineUnderline,
    },
  ];
  return items;
};

export const TextAlignItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      tooltip: "Alinhar à Esquerda",
      icon: GrTextAlignFull,
    },
    {
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      tooltip: "Alinhar ao Centro",
      icon: GrTextAlignCenter,
    },
    {
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      tooltip: "Alinhar à Direita",
      icon: GrTextAlignLeft,
    },
  ];
  return items;
};
