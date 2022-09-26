import React from "react";
import { ComponentMeta } from "@storybook/react";
import Navbar from "./index";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const NavbarComponent = () => <Navbar />;
