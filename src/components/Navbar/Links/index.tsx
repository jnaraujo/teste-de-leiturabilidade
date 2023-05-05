import React, { useState, useEffect } from "react";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";
import { NAVBAR_LINKS } from "../constants";

import styles from "./styles.module.scss";
import { AiOutlineClose } from "react-icons/ai";

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
                  cx({
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
          <Link href="/editor" className={styles.openEditor}>
            Abrir o Editor
          </Link>
        </li>
      </ul>
    </nav>
  );
};
