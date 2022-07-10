import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  font-family: "Inter", sans-serif;

  * {
    padding: 0;
    margin: 0;
  }
`;

export const Content = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 32px;

  > div {
    width: 100%;
    display: flex;
    gap: 8px;

    align-items: center;

    input {
      width: 100%;
      height: 90%;

      border: none;
      background-color: transparent;
      outline: none;
      border: 1px solid #1a1a1a;
      border-radius: 20px;
      padding-left: 16px;

      width: calc(100% - 4px);
    }
    button {
      width: 40%;
      height: 90%;

      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      padding: 10px 10px;

      height: 40px;
      border-radius: 5px;

      color: #fafafa;

      border: 2px solid transparent;

      transition: background 0.3s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #fafafa;
      background-color: #1a1a1a;

      &:hover {
        color: #1a1a1a;
        background-color: #fafafa;
        border: 2px solid #1a1a1a;
      }
    }
  }
`;
