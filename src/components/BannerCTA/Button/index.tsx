import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const Button: React.FC = () => (
  <Container>
    <Link href="/" passHref>
      Testar meu texto gratuitamente!
    </Link>
  </Container>
);

export default Button;
