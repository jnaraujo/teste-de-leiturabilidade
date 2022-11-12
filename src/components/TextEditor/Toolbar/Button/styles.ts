import styled from "styled-components";

export const Button = styled.button<{
  isActive?: boolean;
}>`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-weight: 600;

  font-size: 18px;
  svg {
    font-size: 22px;
  }

  color: ${({ theme, isActive }) => {
    if (isActive) {
      return theme.colors.onSecondary;
    }

    return theme.colors.onBackground;
  }};

  background-color: ${({ theme, isActive }) => {
    if (isActive) {
      return theme.colors.secondary;
    }

    return "transparent";
  }};

  cursor: pointer;
  width: 35px;
  height: 35px;

  border-radius: 8px;

  &:hover {
    background-color: ${({ theme, isActive }) => {
      if (!isActive) {
        return theme.colors.onSurfaceSecondary;
      }

      return theme.colors.secondary;
    }};
  }

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;
