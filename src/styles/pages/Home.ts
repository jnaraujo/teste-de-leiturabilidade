import { Grid } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  .line {
    width: 100%;
    margin: 0 auto;
    max-width: 950px;
    border-top: 1px solid ${({ theme }) => theme.colors.onSurfaceSecondary};
  }

  .aweHidden {
    opacity: 0;
  }
  .hideAndNone {
    display: none;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;

  width: 100%;
  max-width: 1050px;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 1200px;
  }
`;

export const Container = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Informations = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
