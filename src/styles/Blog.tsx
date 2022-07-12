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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90vw;

  margin: 18px;

  .share {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    position: sticky;
    top: 0;

    font-size: 1.4rem;
    color: #6c757d;
    cursor: pointer;
  }

  .information {
    margin: 16px 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 16px;

    p {
      margin: 0;
    }
    p {
      letter-spacing: 1px;
      font-size: 1.1rem;
      font-weight: 500;
      color: #6c757d;
    }
    .right {
      text-align: right;
    }
  }

  @media (min-width: 768px) {
    max-width: 900px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 120%;
    color: #212529;
    margin: 0;
  }
  h2 {
    font-size: 1.1rem;
    color: #6c757d;
    margin: 0;
    margin: 32px 0;
    font-weight: 500;
  }

  .postList {
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    a {
      all: unset;
    }
    h2,
    p {
      margin: 0 !important;
    }
    h2 {
      font-size: 1.4rem;
      color: #343a40;

      cursor: pointer;

      &:hover {
        color: #007bff;
      }
    }
    p {
      font-size: 1rem;
      color: #6c757d;
    }
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
    color: #06d6a0;
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
    border-left: 4px solid #06d6a0;
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
