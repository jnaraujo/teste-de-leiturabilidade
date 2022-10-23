import React from "react";
import useConfig from "@/hooks/useConfig";
import { Container } from "./styles";

interface EditorDivProps {
  children: React.ReactNode;
  className?: string;
}

const EditorDiv: React.FC<EditorDivProps> = ({ children, className }) => {
  const { config } = useConfig();
  return (
    <Container className={`${className} ${config.highlight && "highlight"}`}>
      {children}
    </Container>
  );
};

export default EditorDiv;
