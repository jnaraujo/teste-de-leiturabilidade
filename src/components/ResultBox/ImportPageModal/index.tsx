import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { Modal } from "@mui/material";

import styles from "./styles.module.scss";

import Input from "@/components/Input";
import Button from "@/components/Button";

type Props = {
  open: boolean;
  onClose(): void;
  onImportPage?(value: string): void;
};
const ImportPageModal: React.FC<Props> = ({ open, onClose, onImportPage }) => {
  const externalPageUrlRef = useRef<any>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (externalPageUrlRef.current.value && onImportPage) {
      onImportPage(externalPageUrlRef.current.value);
      onClose();
    }
  }
  return (
    <>
      <Modal
        className={styles.modal}
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <section className={styles.container}>
          <header className={styles.header}>
            <MdClose onClick={onClose} />
          </header>
          <div className={styles.content}>
            <form method="post" onSubmit={handleSubmit}>
              <h1>Importar página externa</h1>
              <Input
                type="url"
                ref={externalPageUrlRef}
                aria-label="Insira o link da página que deseja importar"
                placeholder="Insira o link da página que deseja importar"
                required
              />
              <Button type="submit">
                Importar página externa
              </Button>
            </form>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default ImportPageModal;
