import React from "react";
import { ComponentMeta } from "@storybook/react";
import TextEditor from ".";

export default {
  title: "TextEditor",
  component: TextEditor,
  argTypes: {
    html: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof TextEditor>;

export const Primary = () => <TextEditor html="" />;
export const WithExternalHtml = () => (
  <TextEditor
    html={`
    <h1>Teste de Leitura</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    `}
  />
);
