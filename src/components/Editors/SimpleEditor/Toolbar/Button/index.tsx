import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cx from "clsx";
import Tooltip from "@/components/Tooltip";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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
  ...rest
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Tooltip text={tooltip}>
      <button
        onClick={handleClick}
        className={cx(styles.button, {
          [styles.active]: isActive,
        })}
        {...rest}
      >
        {children}
      </button>
    </Tooltip>
  );
};

export default ButtonComponent;
