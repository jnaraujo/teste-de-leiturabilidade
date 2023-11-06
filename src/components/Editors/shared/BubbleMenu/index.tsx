import { BubbleMenu as TiptapBubbleMenu, Editor } from "@tiptap/react";
import Button from "./Button";
import { getMenuItems } from "./helper";
import { cn } from "@/libs/utils";

interface Props {
  editor: Editor | null;
  shouldBeVisible: boolean;
}

export const BubbleMenu = ({ editor, shouldBeVisible }: Props) => {
  if (!editor) return null;

  return (
    <TiptapBubbleMenu
      tippyOptions={{
        duration: 100,
        delay: 250,
        offset: [0, 25],
      }}
      updateDelay={0}
      editor={editor}
    >
      <div
        className={cn(
          "h-8 w-36 overflow-hidden rounded-md border border-zinc-300 bg-zinc-200 shadow-md",
          {
            hidden: !shouldBeVisible,
          },
        )}
      >
        <ul className="grid h-full w-full grid-cols-3 items-center justify-between gap-[2px]">
          {getMenuItems(editor).map((item) => (
            <li key={item.tooltip} className="flex h-full w-full">
              <Button onClick={item.onClick} tooltip={item.tooltip}>
                {item.icon ? <item.icon size={18} /> : item.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </TiptapBubbleMenu>
  );
};
