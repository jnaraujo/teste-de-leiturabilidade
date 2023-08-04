import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Links } from "./Links";
import { Menu } from "lucide-react";

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
        <Menu />
      </button>
    </header>
  );
};
export default Navbar;
