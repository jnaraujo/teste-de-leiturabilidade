import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  .link {
    all: unset;
    text-align: center;
    width: 100% !important;
    color: #fff !important;
    font-size: 16px !important;

    padding: 8px 24px !important;
    font-weight: 600 !important;
  }
  &:hover {
    background: white !important;
    .link {
      color: black !important;
    }
  }

  cursor: pointer;
  background: black;
  min-height: 30px;
  min-width: fit-content;

  border-radius: 4px;

  border: 2px solid black;
  transition: background 0.3s ease-in-out;
`;
