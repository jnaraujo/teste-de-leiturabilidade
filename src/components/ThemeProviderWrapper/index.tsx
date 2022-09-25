import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import useUpdateTheme from "../../hooks/useUpdateTheme";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}
const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const { theme } = useUpdateTheme();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
