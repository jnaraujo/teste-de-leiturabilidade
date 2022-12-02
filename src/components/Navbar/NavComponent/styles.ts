import styled from "styled-components";

export const Container = styled.nav`
  @media (max-width: 768px) {
    display: none;

    &.open {
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
`;

export const UlList = styled.ul`
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
`;
