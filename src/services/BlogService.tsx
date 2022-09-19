import axios from "axios";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion";
import { renderToString } from "react-dom/server";
import { slugfy } from "./utils/slugfy";

export interface IBlogPost {
  notionId: string;
  slug: string;
  publishedAt: string;
  title: string;
  description: string;
  picture: string;
}

export class BlogService {
  private readonly url;

  private readonly pageUrl = `https://notion-api.splitbee.io/v1/page`;

  private readonly notionId: string;

  private limit: number = 5;

  private rawFetch: any;

  private notion: NotionAPI;

  private posts: IBlogPost[] = [];

  constructor(notionId: string) {
    this.notionId = notionId;
    this.url = `https://notion-api.splitbee.io/v1/table/${notionId}`;

    this.notion = new NotionAPI();
  }

  async getBlogPosts(limit?: number) {
    if (limit) this.limit = limit;

    await this.fetchData();
    this.filterPosts();
    this.mapPosts();
    this.sortPosts();

    return this.posts;
  }

  private async fetchData() {
    const { data } = await axios.get(`${this.url}`);

    const posts = data.slice(0, this.limit);

    this.rawFetch = posts;
  }

  private filterPosts() {
    this.rawFetch = this.rawFetch.filter(
      (post: any) => post.Status === "Published" || post.Status === "Test"
    );
  }

  private mapPosts() {
    this.posts = this.rawFetch.map(({ id, Title, ...postData }: any) => ({
      slug: slugfy(Title),
      notionId: id,
      publishedAt: postData["Published at"],
      tags: postData.Tags || [],
      description: postData.Description,
      title: Title,
      picture: postData?.Picture || "",
    }));
  }

  private sortPosts() {
    this.posts.sort(
      (a: any, b: any) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getBlogPostById(postId: string) {
    await this.getBlogPosts();
    const post = this.findPostById(postId);

    if (!post) return null;

    const body = await this.fetchPostDataById(post.notionId);

    console.log(body);

    return {
      ...post,
      body,
    };
  }

  private findPostById(postId: string) {
    return this.posts.find(
      ({ slug }) => slug.toLowerCase() === postId.toLowerCase()
    );
  }

  async fetchPostDataById(id: string): Promise<string | null> {
    const { data } = await axios.get(`${this.pageUrl}/${id}`);

    if (!data) {
      return null;
    }

    const render = <NotionRenderer blockMap={data} />;

    const html = renderToString(render);

    return html;
  }
}
