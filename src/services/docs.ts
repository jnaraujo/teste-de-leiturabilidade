import axios from "axios";

export function getIdFromUrl(url: string) {
  // https://docs.google.com/document/d/1H727X2_ONvDt6gvX9NumddzS1xOCsmtEsVqZVk91D0w/edit
  let id: string | string[] = url.split("/d/");

  if (id.length > 1) {
    id = id[1].split("/");
    if (id.length > 1) {
      return id[0];
    }
  }
  return "";
}

export async function getDocs(id: string) {
  const url = `https://docs.google.com/feeds/download/documents/export/Export?id=${id}&exportFormat=html`;
  return axios.get(url, {
    maxRedirects: 0,
  });
}
