import React from "react";
import { useConfigStore } from "@/store/configStore";
import { Container } from "./styles";

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
    <Container className={`${className} ${config.highlight && "highlight"}`}>
      {children}
    </Container>
  );
};

export default EditorContainer;
