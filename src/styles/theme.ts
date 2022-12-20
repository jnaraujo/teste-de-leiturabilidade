import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#1a1a1a",
    onPrimary: "#fafafa",

    secondary: "#7B61FF",
    onSecondary: "#cccccc",

    surface: "#212529",
    onSurface: "#fafafa",
    onSurfaceSecondary: "#cccccc",

    background: "#fafafa",
    onBackground: "#343a40",

    semantic: {
      link: "#00be8b",
      error: "#ef233c",
    },
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#1a1a1a",
    onPrimary: "#fafafa",

    secondary: "#7B61FF",
    onSecondary: "#fafafa",

    surface: "#212529",
    onSurface: "#fafafa",
    onSurfaceSecondary: "#cccccc",

    background: "#212529",
    onBackground: "#6c757d",

    semantic: {
      link: "#00be8b",
      error: "#ef233c",
    },
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

export { lightTheme, darkTheme };
