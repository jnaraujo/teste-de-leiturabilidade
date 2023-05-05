import { ReactNode } from "react";
import { Tooltip } from "@mui/material";
import styles from "./styles.module.scss";
import cx from "classnames";

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
      <button onClick={handleClick} className={
        cx({
          [styles.active]: isActive,
        })
      }>
        {children}
      </button>
    </Tooltip>
  );
};

export default ButtonComponent;
