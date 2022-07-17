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

  margin: 32px;

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

    /* padding-bottom: 16px; */

    p {
      margin: 0;
    }
    p {
      letter-spacing: 2px;
      font-size: 1rem;
      font-weight: 500;
      color: #6c757d;
      line-height: 150%;
    }
  }

  @media (min-width: 768px) {
    max-width: 900px;
  }

  h1 {
    font-weight: 700;
    line-height: 130%;
    color: #212529;
    margin: 0;
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
    h3,
    p {
      margin: 0 !important;
    }
    h3 {
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

  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 0.8rem;
      color: #b5bcc2;

      a {
        color: inherit;
      }
    }
  }

  h2 {
    max-width: 100%;
    overflow-wrap: break-word;
    font-weight: 600;
    color: #343a40;
    margin: 24px 0 8px 0;
  }

  h3 {
    max-width: 100%;
    overflow-wrap: break-word;
    font-weight: 600;
    color: #343a40;
    margin: 24px 0 8px 0;
  }
  p {
    color: #495057;
    font-size: 1.1rem;
    line-height: 150%;
    font-weight: 400;
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
