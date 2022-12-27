import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1050px;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90vw;

  margin: 0;

  @media (min-width: 768px) {
    max-width: 750px;
    margin: 32px;
  }

  @media (min-width: 1280px) {
    max-width: 800px;
  }

  @media (min-width: 1440px) {
    max-width: 900px;
  }

  .share {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    position: sticky;
    top: 0;

    font-size: 1.4rem;

    color: ${(props) => props.theme.colors.onSurfaceSecondary};
    cursor: pointer;
  }

  .information {
    margin: 16px 0;
    p {
      margin: 0;
      letter-spacing: 2px;
      font-size: 1rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.onBackground};
      line-height: 150%;
    }
  }

  h1 {
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.colors.primary};

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
      gap: 4px;
    }
    a {
      all: unset;
    }
    h3,
    p {
      margin: 0 !important;
    }
    h3 {
      color: ${(props) => props.theme.colors.primary};

      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.semantic.link};
      }
    }
    p {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.onBackground};
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
      color: ${(props) => props.theme.colors.onBackground};

      a {
        color: inherit;
      }
    }
  }

  h2 {
    max-width: 100%;
    overflow-wrap: break-word;
    font-weight: 600;

    color: ${(props) => props.theme.colors.onBackground};
    margin: 24px 0 8px 0;
  }

  h3 {
    max-width: 100%;
    overflow-wrap: break-word;
    font-weight: 600;
    color: ${(props) => props.theme.colors.onBackground};
    margin: 24px 0 8px 0;
  }
  p {
    color: ${(props) => props.theme.colors.onBackground};
    font-size: 1.1rem;
    line-height: 150%;
    font-weight: 400;
    margin: 8px 0;
  }
  a {
    color: ${(props) => props.theme.colors.semantic.link};
  }
  b {
    font-weight: 600;
  }
  ul,
  ol {
    color: ${(props) => props.theme.colors.onBackground};
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
  figure {
    margin: 0;
    width: 100% !important;
    div {
      padding: 0 !important;
      height: fit-content;
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }
    }
    figcaption {
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.onBackground};
      text-align: center;
      font-weight: 400;
      margin: 4px 0;
    }
  }
  blockquote {
    padding: 16px;
    padding-right: 0;
    margin: 16px 0;
    border-left: 4px solid ${(props) => props.theme.colors.semantic.link};
    font-weight: 500;
    line-height: 150%;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.onBackground};
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
