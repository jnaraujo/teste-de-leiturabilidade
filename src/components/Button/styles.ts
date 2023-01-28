import styled from "styled-components";

export const ButtonComponent = styled.button`
  cursor: pointer;

  width: 100%;
  height: 40px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-weight: 500;
  font-size: 1rem;
  font-family: "Inter", sans-serif;

  border: none;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.onSecondary};
    cursor: not-allowed;
  }
`;
