import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid)`
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
