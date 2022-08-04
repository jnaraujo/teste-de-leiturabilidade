import { DefaultTheme } from "styled-components";

// primary: {
//   purple: "#7B61FF",
// },
// gray: {
//   black: "#1a1a1a",
//   white: "#fafafa",

//   gray1: "#cccccc",
//   gray2: "#6c757d",
//   gray3: "#343a40",
// },
// semantic: {
//   red: "#ef233c",
//   red2: "#d90429",
//   green: "#00be8b",
//   blue: "#007bff",
// },

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#1a1a1a",
    onPrimary: "#fafafa",

    secondary: "#7B61FF",
    onSecondary: "#fafafa",

    surface: "#212529",
    onSurface: "#fafafa",
    onSurfaceSecondary: "#cccccc",

    background: "#fafafa",
    onBackground: "#343a40",

    semantic: {
      link: "#00be8b",
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

export { lightTheme };
