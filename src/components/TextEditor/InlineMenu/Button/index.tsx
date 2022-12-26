import { Tooltip } from "@mui/material";
import React from "react";

const Button = ({
  icon,
  name,
  tooltip,
  onClick,
}: {
  tooltip: string;

  name?: string;
  icon?: React.ReactElement;

  onClick: () => void;
}) => (
  <Tooltip title={tooltip} placement="top">
    <button
      key={name}
      onMouseDown={() => {
        onClick();
      }}
      className="editButton"
      type="button"
    >
      {icon ? <div>{icon}</div> : <p>{name}</p>}
    </button>
  </Tooltip>
);

export default Button;
