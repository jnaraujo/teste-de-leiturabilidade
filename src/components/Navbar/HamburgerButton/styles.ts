import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  display: none;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: block;
  }
`;
