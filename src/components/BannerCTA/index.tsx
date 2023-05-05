import Button from "./Button";
import styles from "./styles.module.scss";

export const BannerCTA = () => (
  <div className={styles.container}>
    <article className={styles.content}>
      <h2>Teste a facilidade de leitura do seu texto!</h2>
      <p>
        Crie, edite e importe seu texto de forma fácil e rápida.
        <br />
        Descubra em tempo real o nível de facilidade de leitura do seu texto.
      </p>
      <Button />
    </article>
  </div>
);
