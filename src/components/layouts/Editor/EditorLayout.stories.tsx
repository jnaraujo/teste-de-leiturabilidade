import React from "react";
import { ComponentMeta } from "@storybook/react";
import Editor from ".";

export default {
  title: "Editor Layout",
  component: Editor,
} as ComponentMeta<typeof Editor>;

export const Primary = () => <Editor />;
