/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LINKS } from "./helper";
import HamburgerButton from "./HamburgerButton";
import { Cta, Navbar } from "./styles";
import { CloseModalButton } from "./CloseModalButton";
import { Title } from "./TitleComponent";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setPath(router.pathname.split("/")[1]);
  }, [router.pathname]);

  return (
    <Navbar as="header" className={isOpen ? "open" : "closed"}>
      <Title />
      <HamburgerButton onClick={handleClick} />

      <nav className="menu">
        <CloseModalButton onClick={handleClick} />

        <ul>
          {LINKS.map((link) => (
            <li key={link.title}>
              <Link href={link.url} passHref>
                <a className={path === link.url.split("/")[1] ? "active" : ""}>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <Cta>
              <Link href="/editor" passHref>
                <a className="link">Abrir o Editor</a>
              </Link>
            </Cta>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};
export default NavbarComponent;
