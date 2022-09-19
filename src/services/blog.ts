import axios from "axios";

async function getPublishedPosts() {
  const posts = (
    await axios.get(
      `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`
    )
  ).data
    .filter((post) => post.Status == "Published")
    .map(({ id, Name, ...data }) => ({
      id: String(Name).toLowerCase().replace(/\s/g, "-"),
      notionId: id,

      publishedAt: data.Published,
      status: data.Status,
      tags: data.Tags,
      title: Name,
      body: data.Description,
    }));

  return posts;
}
async function getPosts() {
  const { data } = await axios.get(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`
  );

  const filteredPosts = data
    .filter((post) => post.Status === "Published" || post.Status === "Test")
    .map(({ id, Name, ...data }) => ({
      id: String(Name).toLowerCase().replace(/\s/g, "-"),
      notionId: id,

      publishedAt: data.Published,
      status: data.Status,
      tags: data.Tags,
      title: Name,
      body: data.Description,
    }));

  return filteredPosts;
}

async function getPostById(postId: any) {
  const { data } = await axios.get(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`
  );

  const filteredPost = data.filter((post: any) => {
    const id = post.Name.toLowerCase().replace(/\s/g, "-");
    const notionId = postId.toLowerCase().replace(/\s/g, "-");
    const isStatusValid = post.Status === "Published" || post.Status === "Test";

    return id === notionId && isStatusValid;
  })[0];

  return {
    id: String(filteredPost.Name).toLowerCase().replace(/\s/g, "-"),
    notionId: filteredPost.id,

    publishedAt: filteredPost.Published,
    status: filteredPost.Status,
    tags: filteredPost.Tags,
    title: filteredPost.Name,
    body: filteredPost.Description,
  };
}

async function getPostRaw(id) {
  const postRaw = (
    await axios.get(
      `https://notion-api.splitbee.io/v1/page/${id.replace(/\s/g, "-")}`
    )
  ).data;
  return postRaw;
}

async function getPostRawById(postId) {
  postId = String(postId).toLowerCase().replace(/-/g, " ");
  const postRaw = (
    await axios.get(`https://notion-api.splitbee.io/v1/page/${postId}`)
  ).data;

  return postRaw;
}

export { getPosts, getPostById, getPostRawById, getPublishedPosts, getPostRaw };
