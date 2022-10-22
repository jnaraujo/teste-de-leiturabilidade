import styled from "styled-components";

export const EditorDiv = styled.div`
  font-family: "Merriweather", serif;

  font-weight: 400;

  line-height: 1.75;

  width: 100%;
  height: 100%;

  padding: 0 0px 0 0;

  font-size: 18px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 175%;
  }

  h1 {
    font-size: 1.7rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.875rem;
  }
  h6 {
    font-size: 0.75rem;
  }

  p {
    font-size: 1rem;
    width: 100%;
    min-height: 1rem;
    line-height: 175%;

    margin: 0.5rem 0;
  }

  .editor {
    width: 100%;
    height: 100%;
    background-color: transparent;
    overflow: hidden;

    resize: none;
    border: none;

    color: ${(props) => props.theme.colors.onBackground};

    &.highlight {
      .ease-hard {
        background-color: #bd232364;
      }
      .ease-medium {
        background-color: #fff4f4e0;
      }
      .ease-easy {
        background-color: #97fba83a;
      }
    }

    p.is-editor-empty:first-child::before {
      color: #adb5bd;
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }

    * {
      outline: none;
    }

    &:focus {
      outline: none !important;
      border: none;
    }
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
      cursor: pointer;
    }
  }

  figure {
    div {
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  img,
  figure {
    width: 90% !important;
    height: auto;
    margin: 0 auto !important;
    padding: 0 !important;
  }

  blockquote {
    padding: 12px;
    padding-right: 0;
    margin: 16px 0;
    border-left: 4px solid #495057;
    font-weight: 500;
    line-height: 150%;
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    padding-bottom: 0;
    border: none;
  }
  &:empty:before {
    content: attr(placeholder);
    position: absolute;
    color: gray;
    background-color: transparent;
  }
`;
