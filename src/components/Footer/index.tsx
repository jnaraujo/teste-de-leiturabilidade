import React from "react";

import { Container, Content } from "./styles";

const Footer: React.FC = () => (
  <Container container justifyContent="center">
    <Content item xs={12} className="footer">
      Feito com ❤️ por{" "}
      <a href="https://jnaraujo.com/" target="_blank" rel="noreferrer">
        Jônatas Araújo
      </a>{" "}
      - {new Date().getFullYear()}
    </Content>
  </Container>
);

export default Footer;
