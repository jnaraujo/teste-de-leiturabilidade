/* eslint-disable no-undef */
import axios from "axios";

import { getPublishedPosts } from "@services/blog"

export default async function handler(req, res) {

    const posts = await getPublishedPosts();
    res.status(200).json({
        posts
    });
    
}