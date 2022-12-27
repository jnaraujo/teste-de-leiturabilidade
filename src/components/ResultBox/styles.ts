import { Grid } from "@mui/material";
import styled from "styled-components";

export const Content = styled.div`
  margin: 1rem 0;

  .editor_config {
    label {
      cursor: pointer;
    }
    input[type="checkbox"] {
      cursor: pointer;
      position: relative;
      margin: 0 0.5rem;
    }
  }
`;

export const RdResult = styled(Grid)`
  font-family: "Inter", sans-serif;
  // width: 90vw;

  // padding: 10px 10px;

  p {
    margin: 0;
    padding: 0;
    font-size: 18px;
    span {
      font-weight: bold;
    }
  }

  h4 {
    font-size: 1.1rem;
    margin: 0;
    margin-bottom: 4px;
  }

  ul {
    margin-top: 5px;

    span {
      font-weight: bold;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0;

    li {
      font-size: 15px;
      list-style: none;
      display: inline;
    }
    li:nth-child(1) {
      left: 0px;
    }
    li:nth-child(3) {
      float: right;
    }
  }

  .ease_bar {
    position: relative;
    width: 100%;
    box-shadow: 0px 0px 15px -5px #d4d4d4;
    border-radius: 50px;
    .cont {
      padding-left: 5px !important;
      padding-right: 5px !important;
    }
    .slider {
      position: absolute;
      background-color: ${({ theme }) => theme.colors.onBackground};
      width: 8px;
      height: 30px;
      margin-top: -5px;
      border-radius: 20px;

      padding: 0;
      .row {
        padding: 0;
        margin: 0;
      }
    }
    .row {
      margin: 8px 0;
      display: flex;
      flex-direction: column;
      .col {
        width: 100%;
      }
    }
    .row .col {
      height: 20px;
    }
    .row .col:nth-child(1) {
      border-radius: 50px 0 0 50px;
      background-color: #bd2323;
    }
    .row .col:nth-child(2) {
      background-color: #e56d6d;
    }
    .row .col:nth-child(3) {
      background-color: #fff4f4;
    }
    .row .col:nth-child(4) {
      background-color: #c3ffcd;
    }
    .row .col:nth-child(5) {
      background-color: #97fba7;
      border-radius: 0 50px 50px 0;
    }
  }
  .importExternalPage {
    border: 2px dashed ${({ theme }) => theme.colors.onBackground};
    border-radius: 10px;
    padding: 10px;
    h3 {
      font-size: 18px;
      font-weight: 700;
      padding: 0;
      margin: 0;
    }
    p {
      margin-top: 4px;
      font-size: 16px;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
      padding-left: 4px;
      width: calc(100% - 4px);
      height: 30px;
      margin-top: 8px;
    }
    button {
      width: 100%;

      margin-top: 8px;

      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      padding: 10px 10px;

      height: 40px;
      border-radius: 5px;

      color: ${({ theme }) => theme.colors.background};

      border: none;

      transition: background 0.3s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.onPrimary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    position: relative;
  }
`;
