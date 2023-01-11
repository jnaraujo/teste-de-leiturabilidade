import { useState } from "react";

import { MenuButton } from "./MenuButton";
import { Container } from "./styles";
import { Title } from "./Title";
import { Nav } from "./Nav";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className={isOpen ? "open" : "closed"}>
      <Title />
      <Nav onClose={handleClick} isOpen={isOpen} />
      <MenuButton onClick={handleClick} />
    </Container>
  );
};
export default NavbarComponent;
