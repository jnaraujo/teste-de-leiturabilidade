import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.dots}>
          {
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={cx(styles.dot, styles[`dot${index+1}`])}></div>
            ))
          }
        </div>
        <p className={styles.text}>Carregando o editor...</p>
      </div>
    </div>
  );
};

export default Loading;
