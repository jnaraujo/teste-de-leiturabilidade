import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.onPrimary};

  width: 100%;
  height: fit-content;

  padding: 8px 0;

  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.onSecondary};

  .group {
    display: flex;
    align-items: center;

    height: 30px;

    padding: 0 16px;
    gap: 8px;

    &:not(:first-child) {
      border-left: 1px solid ${(props) => props.theme.colors.onBackground};
    }
  }
  .control {
    display: none;
  }

  .arrow {
    display: none;
  }
  @media (max-width: 720px) {
    justify-content: left;

    overflow-x: scroll;
    overflow-y: hidden;
    margin-bottom: 0;

    .group {
      gap: 12px;
      padding: 8px 24px;
    }
  }
`;
