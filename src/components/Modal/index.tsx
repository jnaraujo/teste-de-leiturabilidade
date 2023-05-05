/* eslint-disable react/no-danger */
import React from "react";
import { Modal as ModalResp } from "react-responsive-modal";
import styles from "./styles.module.scss";

interface IModal {
  title: string;
  description: string;
  open: boolean;
  onClose(): void;
}

const Modal: React.FC<IModal> = ({ title, description, open, onClose }) => (
  <ModalResp open={open} onClose={onClose} center>
    <div className={styles.modal}>
      <div className={styles.message}>
        <h1>{title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
      <div className={styles.line} />
      <div className={styles.button}>
        <button onClick={onClose} type="button">
          Fechar
        </button>
      </div>
    </div>
  </ModalResp>
);

export default Modal;
