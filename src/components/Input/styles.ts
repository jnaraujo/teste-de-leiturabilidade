import styled from "styled-components";

export const Container = styled.div`
  input {
    height: 35px;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 8px;

    border: 1px solid ${({ theme }) => theme.colors.onBackground};

    width: 100%;

    &::placeholder {
      font-family: "Inter", sans-serif;
    }
  }
`;
