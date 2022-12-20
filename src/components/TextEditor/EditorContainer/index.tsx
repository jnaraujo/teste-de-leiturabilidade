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
  return (
    <Container
      className={cx({
        [String(className)]: className,
        highlight: config.highlight,
      })}
    >
      {children}
    </Container>
  );
};

export default EditorContainer;
