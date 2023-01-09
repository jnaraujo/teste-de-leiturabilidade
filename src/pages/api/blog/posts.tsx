import { BlogService } from "src/services/BlogService";

const blogService = new BlogService(process.env.NOTION_BLOG_ID as string);

export default async function Posts(req: any, res: any) {
  const posts = await blogService.getBlogPosts();
  const urls = [];
  for (let post of posts) {
    urls.push(`https://www.leitura.jnaraujo.com/blog/${post.slug}`);
  }

  res.status(200).send(urls.join("\n"));
}
