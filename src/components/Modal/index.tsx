/* eslint-disable react/no-danger */
import React from "react";
import { Modal as ModalResp } from "react-responsive-modal";
import { ModalDiv } from "./styles";

interface IModal {
  title: string;
  description: string;
  open: boolean;
  onClose(): void;
}

const Modal: React.FC<IModal> = ({ title, description, open, onClose }) => (
  <ModalResp open={open} onClose={onClose} center>
    <ModalDiv>
      <div className="message">
        <h1>{title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
      <div className="line" />
      <div className="button">
        <button onClick={onClose} type="button">
          Fechar
        </button>
      </div>
    </ModalDiv>
  </ModalResp>
);

export default Modal;
