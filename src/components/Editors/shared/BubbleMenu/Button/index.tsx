import Tooltip from "@/components/Tooltip";
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
  <Tooltip text={tooltip} placement="top">
    <button
      onMouseDown={() => {
        onClick();
      }}
      className="flex flex-1 items-center justify-center bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300"
      type="button"
    >
      {children}
    </button>
  </Tooltip>
);

export default Button;
