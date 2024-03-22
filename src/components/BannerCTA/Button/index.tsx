import styles from "./styles.module.scss";
import Link from "next/link";

const Button: React.FC = () => (
  <button className={styles.button}>
    <Link href="/" passHref>
      Testar meu texto gratuitamente!
    </Link>
  </button>
);

export default Button;
