import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const CTAButton: React.FC = () => {
  return (
    <Container>
      <Link href="/editor" passHref>
        <a className="link">Abrir o Editor</a>
      </Link>
    </Container>
  );
};

export { CTAButton };
