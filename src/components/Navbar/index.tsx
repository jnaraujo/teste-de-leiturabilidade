/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";

const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .link {
    all: unset;
    text-align: center;
    width: 100% !important;
    color: #fff !important;
    font-size: 16px !important;

    padding: 8px 24px !important;
    font-weight: 600 !important;
  }
  &:hover {
    background: white !important;
    .link {
      color: black !important;
    }
  }

  cursor: pointer;
  background: black;
  min-height: 30px;
  min-width: fit-content;

  border-radius: 4px;

  border: 2px solid black;
  transition: background 0.3s ease-in-out;
`;

const Navbar = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  max-width: 90vw;
  margin: 0 auto;
  height: fit-content;

  .openBtn,
  .top_close {
    display: none;

    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    .openBtn {
      display: block;
    }
    .menu {
      display: none;
    }

    &.open {
      .menu {
        .top_close {
          display: block;
          position: absolute;
          top: 16px;
          right: 16px;
        }
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: #fafafa;

        ul {
          padding: 0;
          flex-direction: column;
          a {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  .title {
    a {
      all: unset;

      font-size: 1.4rem;
      cursor: pointer;

      color: black;
    }

    .blog {
      color: #06d6a0;
      font-size: 1.2rem;
      margin-left: 4px;
    }
  }

  .menu {
    ul {
      margin: 0;
      display: flex;
      gap: 32px;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;

        &.there {
          a {
            border-bottom: 3px solid #06d6a0;
          }
        }

        a {
          all: unset;
          font-size: 1rem;
          font-weight: 500;
          color: #212529;
          cursor: pointer;
        }

        a:hover {
          color: #495057;
        }
      }
    }
  }
`;

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
    <Navbar className={isOpen ? "open" : "closed"}>
      <div>
        <h3 className="title">
          <Link href="/" passHref>
            <a>Teste de Leitura</a>
          </Link>
        </h3>
      </div>

      <div className="openBtn" onClick={handleClick}>
        <AiOutlineMenu />
      </div>

      <div className="menu">
        <div className="top_close" onClick={handleClick}>
          <AiOutlineClose />
        </div>
        <ul>
          <li>
            <Link href="/#como-funciona" passHref>
              <a>Como funciona?</a>
            </Link>
          </li>
          <li className={path === "blog" ? "there" : ""}>
            <Link href="/blog" passHref>
              <a>Blog</a>
            </Link>
          </li>
          <li className={path === "editor" ? "there" : ""}>
            <Link href="/editor" passHref>
              <a>Editor</a>
            </Link>
          </li>
          <li>
            <Cta>
              <Link href="/" passHref>
                <a className="link">Analisar meu texto!</a>
              </Link>
            </Cta>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};
export default NavbarComponent;
