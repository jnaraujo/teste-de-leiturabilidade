import { Tooltip } from "@mui/material";
import React from "react";

const EditButton = ({
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
  <button
    key={name}
    onMouseDown={() => {
      onClick();
    }}
    className="editButton"
    type="button"
  >
    <Tooltip title={tooltip}>
      {icon ? <div>{icon}</div> : <p>{name}</p>}
    </Tooltip>
  </button>
);

export default EditButton;
