"use client";

import { NotionRenderer as Renderer } from "react-notion";

interface Props {
  className?: string;
  blocks: any;
}

export default function Post({ blocks, className }: Props) {
  return (
    <div className={className}>
      <Renderer blockMap={blocks} />
    </div>
  );
}
