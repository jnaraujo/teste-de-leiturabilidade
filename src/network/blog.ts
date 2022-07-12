import axios from "axios";
import Markdown from "markdown-it";
import matter from "gray-matter";

const md = new Markdown();

async function getPost(url: string) {
  const { data } = await axios.get(`${process.env.POST_URL}/${url}.md`);

  if (!data) {
    return {
      meta: {
        title: "",
        description: "",
        date: "",
      },
      html: "",
    };
  }

  const { content, data: metadata } = matter(data);

  const html = md.render(content || "");

  return {
    meta: {
      title: metadata.title || "",
      description: metadata.metaDesc || "",
      date: metadata.date || "",
    },
    html,
  };
}

export { getPost };

async function getPosts() {
  const { data } = await axios.get(process.env.POSTS_URL);

  const posts = data
    .filter((post) => post.name !== "README.md")
    .map((post) => ({
      slug: post.name.replace(".md", ""),
      raw: post.download_url,
    }));

  return posts;
}

export { getPosts };
