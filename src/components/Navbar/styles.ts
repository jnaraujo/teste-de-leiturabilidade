import styled from "styled-components";

export const Cta = styled.div`
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

export const Navbar = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  max-width: 90vw;
  margin: 0 auto;
  height: fit-content;

  @media (max-width: 768px) {
    .menu {
      display: none;
    }

    &.open {
      .menu {
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

        &.active {
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
