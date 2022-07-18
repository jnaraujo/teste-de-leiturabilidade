/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  max-width: 90vw;

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
  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      all: unset;
      text-align: center;
      width: 100%;
    }

    cursor: pointer;
    background: black;

    padding: 2px 24px;
    min-height: 30px;
    min-width: fit-content;

    border-radius: 4px;

    font-size: 15px;
    font-weight: 600;

    color: #fff;

    border: 2px solid black;
    transition: background 0.3s ease-in-out;
  }

  .cta:hover {
    background: white;
    color: black;
  }
`;

const NavbarComponent = () => (
  <Navbar>
    <div>
      <h3 className="title">
        <Link href="/" passHref>
          <a>Teste de Leitura</a>
        </Link>
        <Link href="/blog" passHref>
          <a className="blog">/blog</a>
        </Link>
      </h3>
    </div>

    <div className="cta">
      <Link href="/" passHref>
        <a>Analisar meu texto!</a>
      </Link>
    </div>
  </Navbar>
);
export default NavbarComponent;
