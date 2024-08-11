import { fetchPosts } from "@/services/BlogService";

export default async function Posts(req: any, res: any) {
  const posts = await fetchPosts(Infinity);
  const urls = [];
  for (let post of posts) {
    urls.push(`https://leiturabilidade.site/blog/${post.Slug}`);
  }

  res.status(200).send(urls.join("\n"));
}
