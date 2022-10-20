import "styled-components";
import { IColors } from "./colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
