import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid)`
  margin: 0 auto;
`;

export const Content = styled(Grid)`
  margin: 0 auto;

  aside {
    all: unset;
  }

  &.left {
    margin: 0;
  }

  &.right {
    position: -webkit-sticky;
    position: sticky;
    top: 75px;
    height: fit-content;
  }

  .textarea {
    background-color: #edede9;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ccc;

    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    min-height: 85vh;

    @media (max-width: $breakpoint-md) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.onSurfaceSecondary};
      margin: 0 8px 20px 8px;
    }
  }
`;

export const LoadingDiv = styled.div`
  position: fixed;
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
