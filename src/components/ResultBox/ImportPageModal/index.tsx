import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Input from "@/components/Input";
import Modal from "react-responsive-modal";
import { Button } from "@/components/ui/button";

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
        open={open}
        onClose={onClose}
        center
        styles={{
          modal: {
            backgroundColor: "#fafafa",
          },
        }}
      >
        <section className={styles.container}>
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
              <Button type="submit">Importar página externa</Button>
            </form>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default ImportPageModal;
