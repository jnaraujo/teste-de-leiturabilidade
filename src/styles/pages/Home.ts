import { Grid } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Inter", sans-serif;

  background-color: ${({ theme }) => theme.colors.background};
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
  width: 100%;
  max-width: 1050px;
`;

export const TopBar = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.onSurfaceSecondary};
  font-family: "Inter", sans-serif;

  p {
    font-size: 16px;
    margin: 0;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.colors.onBackground};
    font-weight: 400;

    span {
      font-weight: 600;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 1rem;
    border-bottom: 0;
    // margin-top: 30px;
    p {
      /* width: 600px; */
      font-size: 20px;
    }
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
