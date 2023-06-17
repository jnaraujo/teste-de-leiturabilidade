import * as TooltipComp from "@radix-ui/react-tooltip"

interface TooltipProps {
  text: string
  children: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  delay?: number
  offset?: number
}

export default function Tooltip({
  text,
  children,
  placement,
  delay = 700,
  offset = 5,
}: TooltipProps) {
  return (
    <TooltipComp.Provider delayDuration={delay}>
      <TooltipComp.Root>
        <TooltipComp.Trigger asChild>{children}</TooltipComp.Trigger>
        <TooltipComp.Portal>
          <TooltipComp.Content
            className="animate-fade-in rounded-md bg-zinc-500 px-2 py-1 text-xs text-zinc-100"
            sideOffset={offset}
            side={placement}
          >
            {text}
          </TooltipComp.Content>
        </TooltipComp.Portal>
      </TooltipComp.Root>
    </TooltipComp.Provider>
  )
}
