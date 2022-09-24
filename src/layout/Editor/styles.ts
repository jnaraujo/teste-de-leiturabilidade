import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;

  &.left {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 32px;
    }
  }

  .textarea {
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    width: 99% !important;
    min-height: 70vh;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.onSurfaceSecondary};
    }
  }
`;

export const LoadingDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
    animation: loading 1s linear infinite;
    fill: white;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
