import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Links } from "./Links";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" passHref className={styles.title}>
        Teste de Leitura
      </Link>
      <Links onClose={handleClick} isOpen={isOpen} />
      <button className={styles.menuButton} type="button" onClick={handleClick} aria-label="Abrir menu">
        <AiOutlineMenu />
      </button>
    </header>
  );
};
export default Navbar;
