import { Editor } from "@tiptap/react";

import { getToolbarGroups, isActive } from "./helper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./styles.module.scss";
import Button from "./Button";
import { MdFormatQuote } from "react-icons/md";

const Toobar = ({ editor }: { editor: Editor }) => {
  const isHeadingActive = () => {
    if (isActive(editor, "heading", { level: 1 })) {
      return "titulo";
    }
    if (isActive(editor, "heading", { level: 2 })) {
      return "subtitulo";
    }
    if (isActive(editor, "paragraph")) {
      return "paragrafo";
    }
  };

  return (
    <div className={styles.toolbar}>
      <div className="flex w-fit items-center gap-2 px-4 sm:gap-4">
        <Select
          onValueChange={(value) => {
            if (value === "paragrafo") {
              editor.chain().focus().setParagraph().run();
            } else if (value === "titulo") {
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            } else if (value === "subtitulo") {
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }
          }}
          value={isHeadingActive()}
          defaultValue="paragrafo"
        >
          <SelectTrigger
            className="h-8 w-32 border-zinc-300 bg-zinc-100 text-zinc-600 focus:border-zinc-500 focus:bg-transparent focus:ring-0 focus:ring-offset-0"
            aria-label="Selecionar tipo de texto"
          >
            <SelectValue placeholder="Parágrafo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="titulo">Título</SelectItem>
            <SelectItem value="subtitulo">Subtítulo</SelectItem>
            <SelectItem value="paragrafo">Parágrafo</SelectItem>
          </SelectContent>
        </Select>
        <Button
          aria-label="Citação"
          isActive={isActive(editor, "blockquote")}
          tooltip="Citação"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <MdFormatQuote size={20} />
        </Button>
      </div>

      {getToolbarGroups(editor).map((items, index) => (
        <div key={`group ${index}`} className={styles.group}>
          {items.map((item) => (
            <Button
              key={item.name + item.tooltip}
              aria-label={item.tooltip}
              onClick={item.onClick}
              tooltip={item.tooltip}
              isActive={isActive(
                editor,
                item.isActive?.name,
                item.isActive?.attributes,
              )}
            >
              {item.icon ? <item.icon /> : item.name}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Toobar;
