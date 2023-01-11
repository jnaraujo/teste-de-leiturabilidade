import React from "react";
import { ComponentMeta } from "@storybook/react";
import { BannerCTA } from ".";

export default {
  title: "BannerCTA",
  component: BannerCTA,
} as ComponentMeta<typeof BannerCTA>;

export const Primary = () => <BannerCTA />;
