import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 95vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1050px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1200px;
  }
  margin: 0 auto;
  height: fit-content;
`;
