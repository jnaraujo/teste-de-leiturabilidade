import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 450px;
  margin: 0;
  padding: 2px 24px;
  min-height: 40px;
  border-radius: 4px;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  background: #06d6a0;
  color: #212529;

  transition: background 0.3s ease-in-out;

  &:hover {
    background: #05b586;
  }

  a {
    all: unset;
    text-align: center;
    width: 100%;
  }
`;
