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

    *::placeholder {
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
      border: 1px solid ${({ theme }) => theme.colors.onBackground};
    }
  }
`;

export const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;
`;
