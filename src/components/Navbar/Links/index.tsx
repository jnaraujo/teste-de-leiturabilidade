import React, { useState, useEffect } from "react";
import Link from "next/link";
import cx from "clsx";
import { NAVBAR_LINKS } from "../constants";

import styles from "./styles.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Links: React.FC<Props> = ({ onClose, isOpen }) => {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname!.split("/")[1];
    setCurrentPath(currentPath);
  }, [pathname]);

  return (
    <nav
      className={cx(styles.navbar, {
        [styles.open]: isOpen,
      })}
    >
      <button className={styles.closeModalButton} onClick={onClose}>
        <AiOutlineClose />
      </button>

      <ul className={styles.list}>
        {NAVBAR_LINKS.map(({ title, url }) => {
          return (
            <li key={title}>
              <Link
                href={url}
                passHref
                className={cx(styles.link, {
                  [styles.active]: currentPath === url,
                })}
                onClick={onClose}
              >
                {title}
              </Link>
            </li>
          );
        })}
        <li>
          <Button asChild className="h-full bg-violet-600 hover:bg-violet-700">
            <Link href="/editor">Testar o Novo Editor!</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
