import type { NextApiRequest, NextApiResponse } from "next";
import handleImport from "../../../libs/ImportExternalPage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url: URL } = req.query;

  if (!URL || typeof URL !== "string") {
    res.status(400).json({ message: "invalid url" });
  }

  try {
    const EXTERNAL_HTML = await handleImport(URL as string);

    return res.status(200).json({
      html: EXTERNAL_HTML,
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "internal server error" });
  }
}
