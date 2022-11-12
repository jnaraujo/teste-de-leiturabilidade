import { ReactNode } from "react";
import { Tooltip } from "@mui/material";
import { Button } from "./styles";

interface ButtonProps {
  isActive?: boolean;
  children: ReactNode;
  tooltip: string;
  onClick?: () => void;
}

const ButtonComponent = ({
  isActive,
  children,
  tooltip,
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Tooltip title={tooltip}>
      <Button onClick={handleClick} isActive={isActive}>
        {children}
      </Button>
    </Tooltip>
  );
};

export default ButtonComponent;
