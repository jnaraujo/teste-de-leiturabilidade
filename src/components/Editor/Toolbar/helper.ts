import { Editor } from "@tiptap/react";

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
  RemoveFormatting,
} from "lucide-react";

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
      icon: Italic,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      tooltip: "Itálico",
      isActive: {
        name: "italic",
      },
    },
    {
      icon: Bold,
      onClick: () => editor.chain().focus().toggleBold().run(),
      tooltip: "Negrito",
      isActive: {
        name: "bold",
      },
    },
    {
      icon: Underline,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      tooltip: "Sublinhado",
      isActive: {
        name: "underline",
      },
    },
  ];
  const TextAlignItems: ToolbarItem[] = [
    {
      icon: AlignLeft,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      tooltip: "Alinhar à Esquerda",
      isActive: {
        attributes: { textAlign: "left" },
      },
    },
    {
      icon: AlignCenter,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      tooltip: "Alinhar ao Centro",
      isActive: {
        attributes: { textAlign: "center" },
      },
    },
    {
      icon: AlignRight,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      tooltip: "Alinhar à Direita",
      isActive: {
        attributes: { textAlign: "right" },
      },
    },
  ];
  const EditingControlItems: ToolbarItem[] = [
    {
      icon: RemoveFormatting,
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
