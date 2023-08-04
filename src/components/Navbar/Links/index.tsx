import React, { useState, useEffect } from "react";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";
import { NAVBAR_LINKS } from "../constants";

import styles from "./styles.module.scss";
import Button from "@/components/Button";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Links: React.FC<Props> = ({ onClose, isOpen }) => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname.split("/")[1];
    setCurrentPath(currentPath);
  }, [router.pathname]);

  return (
    <nav className={
      cx(styles.navbar, {
        [styles.open]: isOpen,
      })
    }>
      <button className={styles.closeModalButton} onClick={onClose}>
        <X />
      </button>

      <ul className={styles.list}>
        {NAVBAR_LINKS.map(({ title, url }) => {
          return (
            <li key={title}>
              <Link
                href={url}
                passHref
                className={
                  cx(
                    styles.link, {
                    [styles.active]: currentPath === url,
                  })
                }
              >
                {title}
              </Link>
            </li>
          );
        })}
        <li>
          <Button asChild className={styles.openEditor}>
            <Link href="/editor" >
              Abrir o Editor
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
