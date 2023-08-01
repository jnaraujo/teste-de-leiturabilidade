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

  return (
    <div
      className={cx(
        styles.container,
        {
          [String(className)]: className,
          [styles.highlight]: config.highlight,
          [styles.allowTips]: config.tips,
        }
      )}
    >
      {children}
    </div>
  );
};

export default EditorContainer;
