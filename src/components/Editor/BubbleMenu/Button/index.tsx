import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import React from "react";

const Button = ({
  tooltip,
  onClick,
  children,
}: {
  tooltip: string;
  children?: React.ReactNode;
  onClick: () => void;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        onMouseDown={() => {
          onClick();
        }}
        className="flex flex-1 items-center justify-center bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        type="button"
      >
        {children}
      </button>
    </TooltipTrigger>
    <TooltipContent side="top">{tooltip}</TooltipContent>
  </Tooltip>
);

export default Button;
