import axios from "axios";

export class NotionService {
  private readonly url: string;

  private pageId: string;

  constructor(url: string) {
    this.url = url;
    this.pageId = this.getPageIdFromUrl();
  }

  private getPageIdFromUrl() {
    const splidedUrl = this.url.split("-");
    return splidedUrl[splidedUrl.length - 1];
  }

  async execute() {
    const data = await this.fetch();
    return data;
  }

  private async fetch() {
    const { data } = await axios.get(
      `https://potion-api.vercel.app/html?id=${this.pageId}`
    );

    return data;
  }
}
