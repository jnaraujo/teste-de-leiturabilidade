import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body,
html {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;

  font-size: 18px;
  @media (max-width: 720px) {
    font-size: 16px;
  }

  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.3;
}

h1 {
  font-size: 2.488rem;
}
h2 {
  font-size: 2.074rem;
}

h3 {
  font-size: 1.728rem;
}

h4 {
  font-size: 1.44rem;
}

h5 {
  font-size: 1.2rem;
}

h6 {
  font-size: 0.875rem;
}

`;

export { GlobalStyles };
