import styled from "styled-components";

export const ModalDiv = styled.div`
  padding: 16px 8px;
  max-width: 500px;
  .message {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    h1 {
      margin-top: 16px;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 32px;
      }
    }
    p {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 24px;
      img {
        width: calc(100% - 16px);
        height: auto;
        border: 2px dashed ${({ theme }) => theme.colors.primary};
        margin-top: 16px;
        padding: 8px;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 20px;
      }
    }
  }
  .line {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    margin: 16px 0;
  }
  .button {
    font-family: "Montserrat", sans-serif;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    button {
      width: 100%;
      &:not(:only-child) {
        width: 45%;
      }
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      padding: 10px 10px;

      height: 40px;
      border-radius: 5px;

      color: ${({ theme }) => theme.colors.onPrimary};

      border: none;

      transition: background 0.3s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: center;

      &:first-child {
        background-color: ${({ theme }) => theme.colors.semantic.error};
        color: ${({ theme }) => theme.colors.onSurface};
        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.semantic.error};
          color: ${({ theme }) => theme.colors.semantic.error};
          background-color: ${({ theme }) => theme.colors.onPrimary};
        }
      }
      &:last-child {
        background-color: ${({ theme }) => theme.colors.onPrimary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.onPrimary};
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
