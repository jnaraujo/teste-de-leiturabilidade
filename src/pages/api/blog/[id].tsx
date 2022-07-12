import { getPost } from "../../../network/blog";

async function PostApi(req, res) {
  const { id } = req.query;

  getPost(id)
    .then((post) => {
      res.json(post);
    })
    .catch(() => {
      res.status(500).json({
        error: "post not found",
      });
    });
}

export default PostApi;
