import React from "react";

import { Container, Content } from "./styles";

const Footer: React.FC = () => (
  <Container container justifyContent="center">
    <Content item xs={12} className="footer">
      Feito por{" "}
      <a href="https://jnaraujo.com/" target="_blank" rel="noreferrer">
        Jônatas Araújo
      </a>{" "}
      - 2021
    </Content>
  </Container>
);

export default Footer;
