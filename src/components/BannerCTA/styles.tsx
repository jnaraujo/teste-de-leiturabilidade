import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
`;

export const Container = styled.article`
  * {
    margin: 0;
  }
  display: flex;
  flex-direction: row;
  align-items: left;
  background-color: #212529;
  border-radius: 8px;
  padding: 30px 24px;

  margin: 16px 0;

  @media (min-width: 768px) {
    .button {
      width: 300px;
    }
    border-radius: 32px;
    padding: 42px;
  }

  h2 {
    font-size: 1.6rem;
    color: #f8f9fa;
    line-height: 120%;
    margin: 0;
  }
  p {
    color: #ced4da;
    line-height: 150%;
  }
`;
