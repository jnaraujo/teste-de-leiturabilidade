import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

const Button: React.FC = () => (
  <button className={styles.button}>
    <Link href="/" passHref>
      Testar meu texto gratuitamente!
    </Link>
  </button>
);

export default Button;
