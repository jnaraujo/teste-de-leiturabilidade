import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12
import { addDecorator } from "@storybook/react";
import "../src/styles/globals.scss";

addDecorator((s) => <>{s()}</>);

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
