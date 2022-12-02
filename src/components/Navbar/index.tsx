/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import HamburgerButton from "./HamburgerButton";
import { Navbar } from "./styles";
import { Title } from "./TitleComponent";
import { Nav } from "./NavComponent";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar as="header" className={isOpen ? "open" : "closed"}>
      <Title />
      <HamburgerButton onClick={handleClick} />
      <Nav onClose={handleClick} isOpen={isOpen} />
    </Navbar>
  );
};
export default NavbarComponent;
