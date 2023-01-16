import { Editor } from "@tiptap/react";

import type { IconType } from "react-icons/lib";
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatUnderlined,
  MdOutlineFormatListNumbered,
  MdFormatQuote,
  MdUndo,
  MdRedo,
} from "react-icons/md";

interface ToolbarItem {
  name?: string;
  icon?: IconType;
  tooltip: string;
  onClick: () => void;

  isActive?: {
    name?: string;
    attributes?: any;
  };
}
export const TextTagsItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      name: "H1",
      tooltip: "H1",
      isActive: {
        name: "heading",
        attributes: { level: 1 },
      },
    },
    {
      name: "H2",
      tooltip: "H2",
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: {
        name: "heading",
        attributes: { level: 2 },
      },
    },
    {
      name: "H3",
      tooltip: "H3",
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: {
        name: "heading",
        attributes: { level: 3 },
      },
    },
    {
      name: "P",
      tooltip: "Parágrafo",
      onClick: () => editor.chain().focus().setParagraph().run(),
      isActive: {
        name: "paragraph",
      },
    },
    {
      icon: MdFormatQuote,
      tooltip: "Citação",
      onClick: () => editor.chain().focus().setBlockquote().run(),
      isActive: {
        name: "blockquote",
      },
    },
  ];
  return items;
};

export const TextFormattingItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      tooltip: "Itálico",
      icon: MdFormatItalic,
      isActive: {
        name: "italic",
      },
    },
    {
      onClick: () => editor.chain().focus().toggleBold().run(),
      tooltip: "Negrito",
      icon: MdFormatBold,
      isActive: {
        name: "bold",
      },
    },
    {
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      tooltip: "Sublinhado",
      icon: MdFormatUnderlined,
      isActive: {
        name: "underline",
      },
    },
  ];
  return items;
};

export const TextAlignItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      tooltip: "Alinhar à Esquerda",
      icon: MdFormatAlignLeft,
      isActive: {
        attributes: { textAlign: "left" },
      },
    },
    {
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      tooltip: "Alinhar ao Centro",
      icon: MdFormatAlignCenter,
      isActive: {
        attributes: { textAlign: "center" },
      },
    },
    {
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      tooltip: "Alinhar à Direita",
      icon: MdFormatAlignRight,
      isActive: {
        attributes: { textAlign: "right" },
      },
    },
  ];
  return items;
};

export const EditingControlItems = (editor: Editor) => {
  const items: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().undo().run(),
      tooltip: "Desfazer",
      icon: MdUndo,
    },
    {
      onClick: () => editor.chain().focus().redo().run(),
      tooltip: "Refazer",
      icon: MdRedo,
    },
  ];
  return items;
};

export const isActive = (editor: Editor, name?: string, attributes?: any) => {
  if (!name && !attributes && !editor) {
    return false;
  }

  if (name) {
    return editor?.isActive(name, attributes);
  }

  return editor?.isActive(attributes);
};

export const ToolbarGroups = [
  TextTagsItems,
  TextFormattingItems,
  TextAlignItems,
  EditingControlItems,
];
