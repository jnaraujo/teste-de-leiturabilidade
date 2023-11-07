import { type Editor } from "@tiptap/react";
import Tooltip from "@/components/Tooltip";
import { cn } from "@/libs/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdFormatQuote } from "react-icons/md";
import { getToolbarGroups, isActive } from "./helper";

interface Props {
  editor: Editor;
  className?: string;
  isPro?: boolean;
}

export default function Toolbar({ editor, className, isPro = false }: Props) {
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
    <div
      className={cn(
        "sm:py-[6px]) z-20 flex w-full justify-start gap-2 overflow-x-auto border px-2 py-2 sm:justify-evenly",
        "bg-zinc-50 dark:bg-zinc-900", //colors
        {
          "sticky top-4 rounded-xl border-zinc-300 bg-zinc-100 dark:border-zinc-600":
            isPro,
        },
        className,
      )}
    >
      <div className="flex w-fit items-center gap-2 sm:gap-4">
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
            className="h-9 w-32 border-zinc-300 bg-zinc-100 text-zinc-600 focus:border-zinc-500 focus:bg-transparent focus:ring-0 focus:ring-offset-0 dark:border-zinc-600 dark:bg-transparent dark:text-zinc-300"
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
          name="Citação"
          isActive={isActive(editor, "blockquote")}
          tooltip="Citação"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <MdFormatQuote size={20} />
        </Button>
      </div>

      {getToolbarGroups(editor).map((items, index) => (
        <div key={index} className="flex w-fit gap-2 sm:gap-4">
          {items.map((item) => (
            <Button
              key={item.name + item.tooltip}
              name={item.name}
              tooltip={item.tooltip}
              onClick={item.onClick}
              isActive={isActive(
                editor,
                item.isActive?.name,
                item.isActive?.attributes,
              )}
            >
              {item.icon ? <item.icon size={20} /> : item.name}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}

interface ButtonProps {
  name?: string;
  tooltip: string;
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}
function Button({ name, onClick, tooltip, isActive, children }: ButtonProps) {
  return (
    <Tooltip key={name + tooltip} text={tooltip}>
      <button
        aria-label={tooltip}
        onClick={onClick}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md font-sans text-base font-bold transition-colors duration-200",
          {
            "text-zinc-600 hover:bg-gray-200 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100":
              !isActive,
            "bg-violet-500 text-zinc-50 hover:bg-violet-600": isActive,
          },
        )}
      >
        {children}
      </button>
    </Tooltip>
  );
}
