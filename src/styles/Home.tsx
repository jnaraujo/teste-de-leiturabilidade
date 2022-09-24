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
  .texts {
    font-family: "Inter", sans-serif;
    padding-top: 40px;
    padding-bottom: 30px;
    h2 {
      font-weight: 600;
      font-size: 25px;
      color: ${({ theme }) => theme.colors.onBackground};

      margin: 8px 0;
      padding: 0;
    }
    h3 {
      margin-top: 30px;
      font-weight: 400;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.onBackground};
    }
    p {
      margin: 0;
      padding: 0;

      font-size: 16px;
      line-height: 1.75;
      a {
        color: ${({ theme }) => theme.colors.semantic.link};
      }
    }
    ul {
      padding: 0;
      li {
        padding-bottom: 10px;
        word-wrap: break-word;
        list-style: none;
        a {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.semantic.link};
        }
      }
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      h2 {
        font-size: 30px;
        margin-top: 32px;
      }
      h2:nth-child(1) {
        margin-top: 10px;
      }
      h3 {
        margin-top: 40px;
        font-weight: 400;
        font-size: 20px;
      }
      p {
        font-size: 18px;
        margin-bottom: 8px;
        line-height: 1.75;
      }
      ul {
        padding: 0;
        li {
          padding-bottom: 10px;
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const Footer = styled(Grid)`
  font-family: "Inter", sans-serif;
  text-align: center;
  padding: 20px;
  font-size: 15px;
  a {
    text-decoration: none;
  }
`;
