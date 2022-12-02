import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Container } from "./styles";

interface Props {
  onClick: () => void;
}
const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Container type="button" onClick={onClick}>
      <AiOutlineMenu />
    </Container>
  );
};

export default HamburgerButton;
