import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    all: unset;
    text-align: center;
    width: 100%;
  }

  max-width: 300px;
  margin: 0;

  cursor: pointer;
  background: #06d6a0;

  padding: 2px 24px;
  min-height: 35px;

  border-radius: 4px;

  font-size: 1rem;
  font-weight: 600;

  color: #212529;

  transition: background 0.3s ease-in-out;

  &:hover {
    background: #05b586;
  }
`;
