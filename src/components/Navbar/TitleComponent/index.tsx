import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const Title: React.FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        Teste de Leitura
      </Link>
    </Container>
  );
};

export { Title };
