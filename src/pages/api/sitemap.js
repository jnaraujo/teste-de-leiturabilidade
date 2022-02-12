import axios from "axios";

import { getPublishedPosts } from "@services/blog"

const Sitemap = async (req, res) => {

    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://jnaraujo.com",
    } [process.env.NODE_ENV];
    

    let staticPages = [
        "/index",
        "/blog",
        "/contact",
        "/portfolio",
    ]

    let blogPosts = [];

    try {
        const posts = await getPublishedPosts();

        posts.forEach(({id})=>{
            blogPosts.push(`/blog/${id}`);
        });
    }catch(e){
        console.log(e);
    }

    const sitemap = `${
            [...blogPosts, ...staticPages]
            .map((url) => {
                return `${baseUrl}${encodeURI(url)}\n`;
            })
            .join("")
        }`;
    
    res.setHeader("Content-Type", "text");
    res.send(sitemap);


};
export default Sitemap;