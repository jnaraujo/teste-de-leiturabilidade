import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1050px;

  max-width: 95vw;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 1200px;
  }
  margin: 0 auto;
  height: fit-content;
`;
