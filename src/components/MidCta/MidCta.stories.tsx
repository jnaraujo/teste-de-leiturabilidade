import React from "react";
import { ComponentMeta } from "@storybook/react";
import MidCta from ".";

export default {
  title: "MidCta",
  component: MidCta,
} as ComponentMeta<typeof MidCta>;

export const Primary = () => <MidCta />;
