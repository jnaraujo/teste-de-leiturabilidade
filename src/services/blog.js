import axios from "axios";

async function getPublishedPosts(){
    const posts = (await axios.get(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`)).data.filter(post=> post.Status == "Published")
    .map(({id, Name, ...data})=>{
        return {
            id: String(Name).toLowerCase().replace( /\s/g, "-"),
            notionId: id,

            publishedAt: data.Published,
            status: data.Status,
            tags: data.Tags,
            title: Name,
            body: data.Description,
        };
    });

    return posts;
}
async function getPosts(){
    const posts = (await axios.get(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`)).data.filter(post=> post.Status == "Published" || post.Status == "Test")
    .map(({id, Name, ...data})=>{
        return {
            id: String(Name).toLowerCase().replace( /\s/g, "-"),
            notionId: id,

            publishedAt: data.Published,
            status: data.Status,
            tags: data.Tags,
            title: Name,
            body: data.Description,
        };
    });

    return posts;
}

async function getPostById(postId){
    const postData = (await axios.get(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`)).data
    .filter(post=> {
        if(post.Status == "Published" || post.Status == "Test"){
            if(String(post.Name).toLowerCase().replace( /\s/g, "-") == String(postId).toLowerCase().replace( /\s/g, "-")){
                return true;
            }
        }
    })[0] 
    return {
        id: String(postData.Name).toLowerCase().replace( /\s/g, "-"),
        notionId: postData.id,

        publishedAt: postData.Published,
        status: postData.Status,
        tags: postData.Tags,
        title: postData.Name,
        body: postData.Description,
    };
}

async function getPostRaw(id){
    const postRaw = (await axios.get(`https://notion-api.splitbee.io/v1/page/${id.replace(/\s/g, "-")}`)).data;
    return postRaw;
}

async function getPostRawById(postId){
    postId = String(postId).toLowerCase().replace( /-/g, " ")
    const postRaw = (await axios.get(`https://notion-api.splitbee.io/v1/page/${postId}`)).data
    
    return postRaw;
}


export {
    getPosts,
    getPostById,
    getPostRawById,
    getPublishedPosts,
    getPostRaw
}