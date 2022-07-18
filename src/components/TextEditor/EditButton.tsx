import { Tooltip } from "@mui/material";
import React from "react";

const EditButton = ({
  cmd,
  arg,
  icon,
  name,
  tooltip,
}: {
  cmd: string;
  tooltip: string;

  name?: string;
  arg?: string;
  icon?: React.ReactElement;
}) => (
  <button
    key={cmd}
    onMouseDown={(evt) => {
      evt.preventDefault(); // Avoids loosing focus from the editable area
      document.execCommand(cmd, false, arg); // Send the command to the browser
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
