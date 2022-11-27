import React from "react";
import useConfig from "@/hooks/useConfig";
import { Container } from "./styles";

interface EditorContainerProps {
  children: React.ReactNode;
  className?: string;
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  children,
  className,
}) => {
  const { config } = useConfig();
  return (
    <Container className={`${className} ${config.highlight && "highlight"}`}>
      {children}
    </Container>
  );
};

export default EditorContainer;
