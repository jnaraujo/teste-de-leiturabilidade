import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Button } from "./styles";

interface Props {
  onClick: () => void;
}
const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} aria-label="Abrir menu">
      <AiOutlineMenu />
    </Button>
  );
};

export default HamburgerButton;
