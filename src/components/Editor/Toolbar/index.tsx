import { type Editor } from "@tiptap/react";
import { cn } from "@/libs/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getToolbarGroups, isActive } from "./helper";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  editor: Editor;
  className?: string;
  isPro?: boolean;
  stickyToolBarOnTop?: boolean;
}

export default function Toolbar({
  editor,
  className,
  isPro = false,
  stickyToolBarOnTop = false,
}: Props) {
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
        "rounded-xl border-zinc-300 bg-[#eeeeef] dark:border-stone-700 dark:bg-stone-800", //colors
        {
          "sticky top-4": stickyToolBarOnTop,
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
            className="h-9 w-32 border-zinc-300 bg-zinc-100 text-zinc-600 focus:border-zinc-500 focus:bg-transparent focus:ring-0 focus:ring-offset-0 dark:border-zinc-600 dark:bg-transparent dark:text-stone-400"
            aria-label="Selecionar tipo de texto"
          >
            <SelectValue placeholder="Parágrafo" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-100 dark:bg-stone-800">
            <SelectItem
              value="titulo"
              className="dark:text-stone-400 dark:hover:bg-stone-900/50"
            >
              Título
            </SelectItem>
            <SelectItem
              value="subtitulo"
              className="dark:text-stone-400 dark:hover:bg-stone-900/50"
            >
              Subtítulo
            </SelectItem>
            <SelectItem
              value="paragrafo"
              className="dark:text-stone-400 dark:hover:bg-stone-900/50"
            >
              Parágrafo
            </SelectItem>
          </SelectContent>
        </Select>
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
              {item.icon ? <item.icon size={16} /> : item.name}
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
    <Tooltip key={name + tooltip}>
      <TooltipTrigger asChild>
        <button
          aria-label={tooltip}
          onClick={onClick}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md font-sans font-bold text-zinc-600 transition-colors duration-200 hover:bg-gray-200 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-zinc-100",
            {
              "bg-violet-500 text-zinc-50 hover:bg-violet-600 dark:text-stone-100 dark:hover:bg-violet-700":
                isActive,
            },
          )}
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={0}>{tooltip}</TooltipContent>
    </Tooltip>
  );
}
