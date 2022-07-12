import { getPost, getPosts } from "../../../network/blog";

export default async function Posts(req, res) {
  const posts = await getPosts();
  const paypack = [];
  const promises = [];

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  for (let i = 0; i < posts.length; i += 1) {
    promises.push(getPost(posts[i].slug));
  }

  const result = await Promise.all(promises);

  for (let i = 0; i < posts.length; i += 1) {
    paypack.push({
      title: result[i].meta.title,
      slug: posts[i].slug,
      date: result[i].meta.date,
      description: result[i].meta.description,
    });
  }

  res.json(paypack);
}
