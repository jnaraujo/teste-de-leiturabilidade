import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
   50%{
    transform: translate(0,15px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;

  gap: 16px;

  .text {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .dot {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 100%;
  }
  .dot1 {
    background-color: #1abc9c;
    animation: ${LoadingAnimation} 0.6s 0.1s linear infinite;
  }
  .dot2 {
    background-color: #ffd64a;
    animation: ${LoadingAnimation} 0.6s 0.2s linear infinite;
  }
  .dot3 {
    background-color: #e867af;
    animation: ${LoadingAnimation} 0.6s 0.3s linear infinite;
  }
`;
