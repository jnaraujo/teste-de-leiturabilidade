import styled from "styled-components";

export const MainContainer = styled.div`
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

  .left {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 16px;
  }

  * {
    margin: 0;
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

  .button {
    /* margin-top: 16px; */
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      all: unset;
      text-align: center;
      width: 100%;
    }

    cursor: pointer;
    background: #06d6a0;

    padding: 2px 24px;
    min-height: 35px;
    min-width: fit-content;

    border-radius: 4px;

    font-size: 1rem;
    font-weight: 600;

    color: #212529;

    transition: background 0.3s ease-in-out;
  }

  .button:hover {
    background: #05b586;
  }
`;
