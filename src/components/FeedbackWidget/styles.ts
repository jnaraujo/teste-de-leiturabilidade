import styled from "styled-components";

export const Widget = styled.div`
  --width: 56px;

  position: fixed;
  bottom: 22px;
  right: 22px;

  width: var(--width);
  height: var(--width);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};

  svg {
    width: calc(var(--width) * 0.5);
    height: calc(var(--width) * 0.5);
    color: ${({ theme }) => theme.colors.onPrimary};

    transition: scale ease-in-out 0.2s;
  }

  &:hover {
    scale: 1.05;
    svg {
      scale: 0.9;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 8px;
    right: 8px;
    --width: 48px;
  }
`;
