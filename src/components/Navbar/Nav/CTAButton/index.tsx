import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const CTAButton: React.FC = () => {
  return (
    <Container>
      <Link href="/editor" className="link">
        Abrir o Editor
      </Link>
    </Container>
  );
};

export { CTAButton };
