import { Modal } from "@mui/material";
import styled from "styled-components";

export const ModalWrap = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  width: 350px;
  max-width: 90vw;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 16px 12px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-right: 4px;
  padding-top: 4px;
  svg {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    * {
      font-family: "Inter", sans-serif;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 8px;
    }

    textarea {
      height: 100px;
      border-radius: 8px;
      padding: 8px;
      margin-bottom: 8px;
      resize: none;
    }

    button {
      cursor: pointer;

      width: 100%;
      height: 40px;
      border-radius: 8px;

      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.onPrimary};
      font-weight: 500;
      font-size: 1rem;

      border: none;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.onSecondary};
        cursor: not-allowed;
      }
    }
  }
`;

export const ConfettiContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
