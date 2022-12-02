import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { Container } from "./styles";

interface Props {
  onClick: () => void;
}
const CloseModalButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Container type="button" onClick={onClick}>
      <AiOutlineClose />
    </Container>
  );
};

export { CloseModalButton };
