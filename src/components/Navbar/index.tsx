/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LINKS } from "./helper";
import { Cta, Navbar } from "./styles";

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
      <div className="title">
        <Link href="/" passHref>
          <a>Teste de Leitura</a>
        </Link>
      </div>

      <div className="openBtn" onClick={handleClick}>
        <AiOutlineMenu />
      </div>
      <nav className="menu">
        <div className="top_close" onClick={handleClick}>
          <AiOutlineClose />
        </div>
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
