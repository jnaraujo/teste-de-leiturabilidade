import axios from "axios";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion";

import { renderToString } from "react-dom/server";

const notion = new NotionAPI();

function slugfy(text: string) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getBlogPosts(limit?: number) {
  const apiUrl = `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`;
  const {
    data,
  }: {
    data: Array<any>;
  } = await axios.get(apiUrl);

  const posts = data
    .filter((post) => post.Status === "Published")
    .map(({ id, Title, ...postData }) => ({
      slug: slugfy(Title),
      notionId: id,
      publishedAt: postData["Published at"],
      tags: postData.Tags || [],
      description: postData.Description,
      title: Title,
      picture: postData?.Picture || "",
    }))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return posts.slice(0, limit || posts.length);
}

export async function getPost(id: string): Promise<any> {
  const posts = await getBlogPosts();
  const post = posts.find(({ slug }) => slug === id);

  if (!post) {
    return null;
  }

  const { data: postRaw } = await axios.get(
    `https://notion-api.splitbee.io/v1/page/${post.notionId}`
  );

  if (!postRaw) {
    return null;
  }

  const recordMap = await notion.getPage(post.notionId);

  const render = <NotionRenderer blockMap={recordMap.block as any} />;
  const html = renderToString(render);

  return {
    title: post.title,
    description: post.description,
    body: html,
    publishedAt: post.publishedAt,
    tags: post.tags.join(", "),
    picture: post?.picture || "",
  };
}
