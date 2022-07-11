import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  background-color: #f8f9fa;

  width: 100%;
  height: 30px;

  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
  border-top: 1px solid #e9ecef;

  .group {
    display: flex;
    align-items: center;

    padding: 0 16px;

    height: 100%;

    gap: 8px;

    &:not(:first-child) {
      border-left: 1px solid #e9ecef;
    }
  }

  .editButton {
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    color: #6c757d;

    padding: 0 8px;
    cursor: pointer;

    border-radius: 8px;

    transition: color 0.2s ease-in-out;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  .editButton:hover {
    color: #adb5bd;
  }
`;

export const EditorDiv = styled.div`
  font-family: "Merriweather", serif;

  font-weight: 400;
  color: $black;
  line-height: 1.75;

  width: 100%;
  height: 100%;

  padding: 0 0px 0 0;

  font-size: 18px;

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
  }

  .facePlaceholder:empty:not(:focus)::before {
    content: attr(data);
  }

  .firstLine {
    font-size: 16px;
    height: 16px;
  }

  .editor {
    width: 100%;
    height: 100%;
    background-color: transparent;
    overflow: hidden;

    resize: none;
    border: none;

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
