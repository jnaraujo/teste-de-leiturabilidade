import { getReadingTime, slugfy } from "@/utils";
import { NotionRenderer } from "react-notion";

interface Post {
  id: string;
  Author: string;
  "Published at": string;
  Status: string;
  Tags: string[];
  Description: string;
  Title: string;
  Slug: string;
}
export type PostResponse = Post[];

export async function fetchPosts(limit = 10) {
  const response = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`,
    {
      next: {
        revalidate: 120 // 2 minutes
      }
    }
  );

  let posts: PostResponse = [];

  if (!response.ok) {
    posts = [];
  } else {
    posts = await response.json();
  }

  posts = posts
    .filter((post) => post.Status === "Published")
    .sort((a, b) => {
      const dateA = new Date(a["Published at"]);
      const dateB = new Date(b["Published at"]);

      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, limit)
    .map((post) => ({
      ...post,
      Slug: slugfy(post.Title),
    }));

  return posts;
}

export async function fetchPost(id: string) {
  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
    next: {
      revalidate: 120 // 2 minutes
    }
  });

  let post;
  if (response.ok) {
    post = await response.json();
  }

  return post;
}

interface PostWithHtml extends Post {
  html: string;
  readingTime: number;
}

const cache = new Map<string, PostWithHtml>();

export async function fetchPostBySlug(slug: string) {
  const posts = await fetchPosts(Infinity);

  const post = posts.find((post) => slugfy(post.Title) === slug);

  if (!post) return null;

  if(cache.has(post.id)) {    
    return cache.get(post.id);
  }

  const blockMap = await fetchPost(post.id);

  const ReactDOMServer = (await import("react-dom/server")).default;

  const html = ReactDOMServer.renderToString(
    <NotionRenderer blockMap={blockMap} />,
  );

  const time = getReadingTime(html);
  const result = {
    ...post,
    readingTime: time,
    html,
  };

  cache.set(post.id, result);

  return result;
}