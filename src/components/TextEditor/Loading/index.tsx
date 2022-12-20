import React from "react";

import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
      <p className="text">Carregando o editor...</p>
    </Container>
  );
};

export default Loading;
