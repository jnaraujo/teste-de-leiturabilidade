import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.onPrimary};

  width: 100%;
  height: fit-content;

  padding: 8px 0;
  margin-bottom: 16px;

  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.colors.onBackground};

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
  @media (max-width: 720px) {
    z-index: 100;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    justify-content: left;
    width: 100vw;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.31);

    overflow-x: scroll;

    border: none;
    margin-bottom: 0;

    .group {
      gap: 12px;
      height: 20px;
      padding: 8px 24px;
    }
  }
`;
