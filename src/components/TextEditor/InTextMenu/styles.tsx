import styled from "styled-components";

export const ComponentDiv = styled.div`
  position: relative;
  --vWidth: 300px;
  --vHeight: 30px;

  @media (max-width: 768px) {
    --vHeight: 40px;
    --vWidth: 320px;
  }

  width: var(--vWidth);
  height: var(--vHeight);

  :not(&.visible) {
    display: none;
  }

  background-color: #e9ecef;

  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.11);

  border-radius: 8px;
  overflow: hidden;

  ul {
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    list-style: none;
    width: 100%;
    gap: 2px;
    li {
      all: unset;
      width: 100%;

      height: var(--vHeight);

      button {
        all: unset;
        width: 100%;
        height: 100%;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #f8f9fa;

        transition: background-color 0.2s ease-in-out;

        cursor: pointer;

        &:hover {
          background-color: #adb5bd;
        }

        div,
        p {
          all: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
