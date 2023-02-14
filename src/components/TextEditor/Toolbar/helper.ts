import { Editor } from "@tiptap/react";

import type { IconType } from "react-icons/lib";
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatQuote,
  MdFormatClear,
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

export function getToolbarGroups(editor: Editor) {
  const TextTagsItems: ToolbarItem[] = [
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
  const TextFormattingItems: ToolbarItem[] = [
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
  const TextAlignItems: ToolbarItem[] = [
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
  const EditingControlItems: ToolbarItem[] = [
    {
      onClick: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
      tooltip: "Limpar formatação",
      icon: MdFormatClear,
      isActive: {
        name: "never",
      },
    },
  ];

  return [
    TextTagsItems,
    TextFormattingItems,
    TextAlignItems,
    EditingControlItems,
  ];
}

export const isActive = (editor: Editor, name?: string, attributes?: any) => {
  if (!name && !attributes && !editor) {
    return false;
  }

  if (name) {
    return editor?.isActive(name, attributes);
  }

  return editor?.isActive(attributes);
};
