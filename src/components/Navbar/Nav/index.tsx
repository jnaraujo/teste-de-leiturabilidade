import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { CloseModalButton } from "../CloseModalButton";
import { NAVBAR_LINKS } from "../constants";

import { Container, UlList } from "./styles";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Nav: React.FC<Props> = ({ onClose, isOpen }) => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname.split("/")[1];
    setCurrentPath(currentPath);
  }, [router.pathname]);

  return (
    <Container className={isOpen ? "open" : "closed"}>
      <CloseModalButton onClick={onClose} />

      <UlList>
        {NAVBAR_LINKS.map(({ title, url }) => {
          return (
            <li key={title}>
              <Link
                href={url}
                passHref
                className={currentPath === url ? "active" : ""}
              >
                {title}
              </Link>
            </li>
          );
        })}
        <li>
          <CTAButton />
        </li>
      </UlList>
    </Container>
  );
};
