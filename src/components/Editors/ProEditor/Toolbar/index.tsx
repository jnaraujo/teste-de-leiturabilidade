import { type Editor } from "@tiptap/react";
import { getToolbarGroups, isActive } from "./helper";
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

export default function Toolbar({ editor }: { editor: Editor }) {
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
    <div className="sticky top-4 z-20 flex w-full justify-start gap-2 overflow-x-auto rounded-xl border border-zinc-300 bg-zinc-100 px-2 py-1 sm:justify-evenly sm:py-[2px]">
      <div className="flex w-fit items-center gap-2">
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
          <SelectTrigger className="h-9 w-32 border-zinc-300 bg-zinc-100 text-zinc-600 focus:border-zinc-500 focus:bg-transparent focus:ring-0 focus:ring-offset-0">
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
        aria-label={name}
        onClick={onClick}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md font-sans text-base font-bold text-zinc-600 transition-colors duration-200 hover:bg-gray-200",
          {
            "bg-violet-500 text-zinc-50 hover:bg-violet-600": isActive,
          },
        )}
      >
        {children}
      </button>
    </Tooltip>
  );
}
