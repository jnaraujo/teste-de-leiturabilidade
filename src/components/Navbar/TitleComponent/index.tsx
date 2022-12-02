import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const Title: React.FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <a>Teste de Leitura</a>
      </Link>
    </Container>
  );
};

export { Title };
