import React from "react";
import { useConfigStore } from "@/store/configStore";
import styles from "./styles.module.scss";
import cx from "classnames";

interface EditorContainerProps {
  children: React.ReactNode;
  className?: string;
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  children,
  className,
}) => {
  const { config } = useConfigStore();
  const [isHighlight, setIsHighlight] = React.useState(false);

  React.useEffect(() => {
    setIsHighlight(config.highlight);
  }, [config.highlight]);

  return (
    <div
      className={cx(
        styles.container,
        {
          [String(className)]: className,
          [styles.highlight]: isHighlight,
        }
      )}
    >
      {children}
    </div>
  );
};

export default EditorContainer;
