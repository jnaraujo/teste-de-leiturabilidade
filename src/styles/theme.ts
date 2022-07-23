import { DefaultTheme } from "styled-components";

const colors = {
  primary: {
    purple: "#7B61FF",
  },
  gray: {
    black: "#1a1a1a",
    white: "#fafafa",

    gray1: "#cccccc",
    gray2: "#6c757d",
    gray3: "#343a40",
  },
  semantic: {
    red: "#ef233c",
    red2: "#d90429",
    green: "#00be8b",
    blue: "#007bff",
  },
};

const lightTheme: DefaultTheme = {
  colors,
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

export { lightTheme, colors };
