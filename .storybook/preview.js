import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/styles/theme";
import { GlobalStyles } from "../src/styles/global";

const themes = [darkTheme, lightTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
