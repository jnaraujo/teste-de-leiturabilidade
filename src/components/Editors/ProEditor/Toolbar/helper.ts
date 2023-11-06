import { Editor } from "@tiptap/react";

import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatClear,
} from "react-icons/md";

interface ToolbarItem {
  name?: string;
  icon?: any;
  tooltip: string;
  onClick: () => void;

  isActive?: {
    name?: string;
    attributes?: any;
  };
}

export function getToolbarGroups(editor: Editor) {
  const TextFormattingItems: ToolbarItem[] = [
    {
      icon: MdFormatItalic,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      tooltip: "Itálico",
      isActive: {
        name: "italic",
      },
    },
    {
      icon: MdFormatBold,
      onClick: () => editor.chain().focus().toggleBold().run(),
      tooltip: "Negrito",
      isActive: {
        name: "bold",
      },
    },
    {
      icon: MdFormatUnderlined,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      tooltip: "Sublinhado",
      isActive: {
        name: "underline",
      },
    },
  ];
  const TextAlignItems: ToolbarItem[] = [
    {
      icon: MdFormatAlignLeft,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      tooltip: "Alinhar à Esquerda",
      isActive: {
        attributes: { textAlign: "left" },
      },
    },
    {
      icon: MdFormatAlignCenter,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      tooltip: "Alinhar ao Centro",
      isActive: {
        attributes: { textAlign: "center" },
      },
    },
    {
      icon: MdFormatAlignRight,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      tooltip: "Alinhar à Direita",
      isActive: {
        attributes: { textAlign: "right" },
      },
    },
  ];
  const EditingControlItems: ToolbarItem[] = [
    {
      icon: MdFormatClear,
      onClick: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
      tooltip: "Limpar formatação",
      isActive: {
        name: "never",
      },
    },
  ];

  return [TextFormattingItems, TextAlignItems, EditingControlItems];
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
