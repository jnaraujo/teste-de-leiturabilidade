import * as TooltipComp from "@radix-ui/react-tooltip"

interface TooltipProps {
  text: string
  children: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
}

export default function Tooltip({ text, children, placement }: TooltipProps) {
  return (
    <TooltipComp.Provider>
      <TooltipComp.Root>
        <TooltipComp.Trigger asChild>{children}</TooltipComp.Trigger>
        <TooltipComp.Portal>
          <TooltipComp.Content side={placement}>{text}</TooltipComp.Content>
        </TooltipComp.Portal>
      </TooltipComp.Root>
    </TooltipComp.Provider>
  )
}
