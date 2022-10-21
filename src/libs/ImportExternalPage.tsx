import sanitize from "sanitize-html-react";
import { NotionService } from "../services/NotionService";
import { getDocs, getIdFromUrl } from "../services/docs";

const sanitizeOptions = {
  allowedTags: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "p",
    "a",
    "ul",
    "li",
    "strong",
    "em",
    "img",
    "br",
  ],
};

async function importNotionPageByUrl(url: string) {
  const notionService = new NotionService(url);

  const data = await notionService.execute();

  const isDataValid = data && !data.error;

  if (!isDataValid) {
    throw new Error("A página do Notion não está pública.");
  }

  return {
    unSanitazedHtml: data,
  };
}

async function importGoogleDocsPage(url: string | any): Promise<{
  unSanitazedHtml: string;
}> {
  const id = getIdFromUrl(url);

  if (id === "") {
    throw new Error("O id da página não foi encontrado.");
  }

  const data = await getDocs(id);

  return {
    unSanitazedHtml: data,
  };
}

export default async function handleImport(url: string): Promise<string> {
  const notionUrls = ["notion.so", "notion.com", "notion.site"];
  const googleDocsUrls = ["docs.google.com", "drive.google.com"];

  try {
    let rawHTML = "";

    if (notionUrls.some((notion) => url.includes(notion))) {
      rawHTML = await (await importNotionPageByUrl(url)).unSanitazedHtml;
    } else if (googleDocsUrls.some((googleDocs) => url.includes(googleDocs))) {
      rawHTML = await (await importGoogleDocsPage(url)).unSanitazedHtml;
    } else {
      throw new Error("O link não é válido.");
    }

    return sanitize(rawHTML, sanitizeOptions);
  } catch (error: any) {
    throw new Error(error.message || "erro desconhecido");
  }
}
