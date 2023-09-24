import React, { useState, useEffect } from "react";
import Link from "next/link";
import cx from "clsx";
import { NAVBAR_LINKS } from "../constants";

import styles from "./styles.module.scss";
import Button from "@/components/Button";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Links: React.FC<Props> = ({ onClose, isOpen }) => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname!.split("/")[1];
    setCurrentPath(currentPath);
  }, [pathname]);

  return (
    <nav className={
      cx(styles.navbar, {
        [styles.open]: isOpen,
      })
    }>
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
