import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { CloseModalButton } from "../CloseModalButton";
import { NAVBAR_LINKS } from "../constants";

import { Container, UlList } from "./styles";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Links: React.FC<Props> = ({ onClose, isOpen }) => {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const currentPath = pathname.split("/")[1];
    setCurrentPath(currentPath);
  }, []);

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
