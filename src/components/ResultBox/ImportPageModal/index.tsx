import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import {
  Container,
  ModalWrap,
  Header,
  Content,
} from "./styles";
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
      <ModalWrap
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Header>
            <MdClose onClick={onClose} />
          </Header>
          <Content>
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
          </Content>
        </Container>
      </ModalWrap>
    </>
  );
};

export default ImportPageModal;
