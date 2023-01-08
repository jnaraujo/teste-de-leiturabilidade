import React from "react";
import { useConfigStore } from "@/store/configStore";
import { Container } from "./styles";
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
    <Container
      className={cx({
        [String(className)]: className,
        highlight: isHighlight,
      })}
    >
      {children}
    </Container>
  );
};

export default EditorContainer;
