import { getPosts } from "../../../network/blog";

export default async function Posts(req, res) {
  const posts = await getPosts();
  const urls = [];
  for (let i = 0; i < posts.length; i += 1) {
    urls.push(`https://www.leitura.jnaraujo.com/blog/${posts[i].slug}`);
  }

  res.status(200).send(urls.join("\n"));
}
