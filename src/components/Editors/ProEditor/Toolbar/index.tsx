import { type Editor } from "@tiptap/react";
import { getToolbarGroups, isActive } from "./helper";
import Tooltip from "@/components/Tooltip";

export default function Toolbar({ editor }: { editor: Editor }) {
  return (
    <div className="sticky top-8 z-20 flex w-full justify-start gap-2 overflow-x-auto rounded-xl border border-zinc-300 bg-zinc-100 px-2 py-[2px] sm:justify-evenly">
      {getToolbarGroups(editor).map((items, index) => (
        <div key={index} className="flex w-fit gap-2">
          {items.map((item) => (
            <Tooltip key={item.name + item.tooltip} text={item.tooltip}>
              <button
                aria-label={item.name}
                onClick={item.onClick}
                className="flex h-10 w-10 items-center justify-center rounded-md text-base font-bold hover:bg-gray-200"
                data-active={isActive(
                  editor,
                  item.isActive?.name,
                  item.isActive?.attributes,
                )}
              >
                {item.icon ? (
                  <span className="text-xl">
                    <item.icon />
                  </span>
                ) : (
                  item.name
                )}
              </button>
            </Tooltip>
          ))}
        </div>
      ))}
    </div>
  );
}
