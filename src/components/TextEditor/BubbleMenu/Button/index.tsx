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
      className="editButton"
      type="button"
    >
      {children}
    </button>
  </Tooltip>
);

export default Button;
