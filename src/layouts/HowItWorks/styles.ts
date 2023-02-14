import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid)`
  .texts {
    padding-top: 40px;
    padding-bottom: 30px;
    ul {
      padding: 0;
      li {
        max-width: 80vw;
        display: inline-block;
        padding-bottom: 10px;
        word-wrap: break-word;
        list-style: none;
        a {
          color: ${({ theme }) => theme.colors.semantic.link};
        }
      }
    }
  }
`;

export const Heading = styled.h3<{
  isSubHeading?: boolean;
}>`
  margin: 8px 0;
  padding: 0;
  margin-top: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;

  line-height: 1.75;
  a {
    color: ${({ theme }) => theme.colors.semantic.link};
  }
`;
