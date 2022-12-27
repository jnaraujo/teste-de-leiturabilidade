import { Inter, Merriweather } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  fallback: ["serif"],
});

const GlobalStyles = createGlobalStyle`
html {
  --merriweather-font: ${merriweather.style.fontFamily};
  --inter-font: ${inter.style.fontFamily};

  box-sizing: border-box;
  scroll-behavior: smooth;
  
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 18px;
  @media (max-width: 720px) {
    font-size: 16px;
  }
  line-height: 1.5;
}

* {
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  overflow-x: hidden;
  position: relative;

  font-family: var(--inter-font) !important;
  font-weight: 500 !important;
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
