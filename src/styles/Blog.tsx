import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Inter", sans-serif;

  background-color: #fafafa;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1050px;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  max-width: 90vw;

  .title {
    a {
      all: unset;

      font-size: 1.4rem;
      cursor: pointer;

      color: black;
    }
  }
  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      all: unset;
      text-align: center;
      width: 100%;
    }

    cursor: pointer;
    background: black;

    padding: 2px 24px;
    min-height: 30px;
    min-width: fit-content;

    border-radius: 4px;

    font-size: 15px;
    font-weight: 600;

    color: #fff;

    border: 2px solid black;
    transition: background 0.3s ease-in-out;
  }

  .cta:hover {
    background: white;
    color: black;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90vw;

  margin: 18px;

  @media (min-width: 768px) {
    max-width: 900px;
  }

  h1 {
    font-size: 2rem;
    color: #212529;
    margin: 0;
  }
`;

export const BlogText = styled.div`
  width: 100%;
  margin: 0;
  h2 {
    max-width: 100%;
    overflow-wrap: break-word;
    font-size: 1.4rem;
    line-height: 150%;
    font-weight: 600;
    color: #343a40;
  }
  p {
    color: #495057;
    font-size: 1.1rem;
    line-height: 150%;
    font-weight: 500;
    margin: 8px 0;
  }
  a {
    color: #7b61ff;
  }
  ul,
  ol {
    color: #495057;
    margin: 8px 0;
    font-weight: 500;
    line-height: 150%;
    font-size: 1rem;
    li {
      line-height: 1.4;
      padding-left: 4px;
    }
    ul,
    ol {
      list-style-type: disc;
    }
  }
  blockquote {
    padding: 16px;
    padding-right: 0;
    margin: 16px 0;
    border-left: 4px solid #7b61ff;
    font-weight: 500;
    line-height: 150%;
    font-size: 1rem;
    color: #495057;
  }
  pre {
    position: relative;
    max-width: 100vw;
    overflow: auto;
    code {
      font-size: 1rem;
    }
  }
  img {
    width: 100%;
  }
`;
