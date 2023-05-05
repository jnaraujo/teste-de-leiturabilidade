import React from "react";

import styles from "./styles.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    Feito com ❤️ por{" "}
    <a href="https://jnaraujo.com/" target="_blank" rel="noreferrer">
      Jônatas Araújo
    </a>{" "}
    - {new Date().getFullYear()}
  </footer>
);

export default Footer;
