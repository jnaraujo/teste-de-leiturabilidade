import * as TooltipComp from "@radix-ui/react-tooltip";
import styles from "./styles.module.scss";

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
            className={styles.tooltip}
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