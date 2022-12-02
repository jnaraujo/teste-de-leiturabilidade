import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { CloseModalButton } from "../CloseModalButton";
import { LINKS } from "../helper";

import { Container, UlList } from "./styles";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const Nav: React.FC<Props> = ({ onClose, isOpen }) => {
  const [path, setPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname.split("/")[1]);
  }, [router.pathname]);

  return (
    <Container className={isOpen ? "open" : "closed"}>
      <CloseModalButton onClick={onClose} />

      <UlList>
        {LINKS.map((link) => (
          <li key={link.title}>
            <Link href={link.url} passHref>
              <a className={path === link.url.split("/")[1] ? "active" : ""}>
                {link.title}
              </a>
            </Link>
          </li>
        ))}
        <li>
          <CTAButton />
        </li>
      </UlList>
    </Container>
  );
};

export { Nav };
