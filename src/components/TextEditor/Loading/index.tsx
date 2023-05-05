import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        {
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={cx(styles.dot, styles[`dot${index}`])}></div>
          ))
        }
      </div>
      <p className={styles.text}>Carregando o editor...</p>
    </div>
  );
};

export default Loading;
