import { BlogService } from "src/services/BlogService";

const blogService = new BlogService(process.env.NOTION_BLOG_ID as string);

export default async function Posts(req: any, res: any) {
  const posts = await blogService.getBlogPosts();
  const urls = [];
  for (let i = 0; i < posts.length; i += 1) {
    urls.push(`https://www.leitura.jnaraujo.com/blog/${posts[i].slug}`);
  }

  res.status(200).send(urls.join("\n"));
}
