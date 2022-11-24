import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const Button: React.FC = () => (
  <Container>
    <Link href="/" passHref>
      <a>Testar meu texto gratuitamente!</a>
    </Link>
  </Container>
);

export default Button;
