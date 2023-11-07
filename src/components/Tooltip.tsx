import * as TooltipComp from "@radix-ui/react-tooltip";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  delay?: number;
  offset?: number;
}

export default function Tooltip({
  text,
  children,
  placement,
  delay = 100,
  offset = 5,
}: TooltipProps) {
  return (
    <TooltipComp.Provider delayDuration={delay}>
      <TooltipComp.Root>
        <TooltipComp.Trigger asChild>{children}</TooltipComp.Trigger>
        <TooltipComp.Portal>
          <TooltipComp.Content
            className={`z-30 rounded-md bg-zinc-800 px-2 py-[2px] text-xs text-zinc-50 dark:bg-zinc-50 dark:text-zinc-800`}
            sideOffset={offset}
            side={placement}
          >
            {text}
          </TooltipComp.Content>
        </TooltipComp.Portal>
      </TooltipComp.Root>
    </TooltipComp.Provider>
  );
}
