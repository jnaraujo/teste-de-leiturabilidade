import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #7b61ff;
  z-index: 9999;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    animation: ${LoadingAnimation} cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation-duration: 2s;
    animation-delay: 0.5s;
    will-change: left, right;
  }
`;
