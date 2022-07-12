// /* eslint-disable no-undef */
// import { getPostById, getPostRawById } from "@services/blog";

// export default async function handler(req, res) {
//   const { id } = req.query;

//   const postId = String(id).toLowerCase().replace(/-/g, " ");

//   try {
//     const postData = await getPostById(postId);

//     const postRaw = await getPostRawById(postData.id);

//     res.status(200).json({
//       data: postRaw,
//       info: {
//         id: postData.id,
//         publishedAt: postData.Published,
//         status: postData.Status,
//         tags: postData.Tags,
//         title: postData.Name,
//         body: postData.Description,
//       },
//     });
//   } catch (err) {
//     res.json({
//       error: err,
//     });
//   }
// }
