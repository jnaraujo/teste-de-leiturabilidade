import axios from "axios";

export class GoogleDocsService {
  private readonly url: string;

  private pageId: string;

  constructor(url: string) {
    this.url = url;
    this.pageId = this.getPageIdFromUrl();
  }

  private getPageIdFromUrl() {
    let id: string | string[] = this.url.split("/d/");

    if (id.length > 1) {
      id = id[1].split("/");
      if (id.length > 1) {
        return id[0];
      }
    }
    return "";
  }

  async execute() {
    const data = await this.fetch();
    return data;
  }

  private async fetch() {
    const { data } = await axios.get(
      `https://docs.google.com/feeds/download/documents/export/Export?id=${this.pageId}&exportFormat=html`
    );

    return data;
  }
}
