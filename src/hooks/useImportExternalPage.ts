import { useCallback, useEffect, useState } from "react";
import handleImport from "../libs/ImportExternalPage";

interface IError {
  title: string;
  message: string;
}

export const useImportExternalPage = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState<IError | null>(null);

  useEffect(() => {
    if (url) {
      handleImport(url)
        .then((res) => {
          if (res.status === "error") {
            const errorMessage = {
              title: res.message?.title ?? "Erro ao importar página",
              message: res.message?.description ?? "Ocorreu um erro inesperado",
            };
            setError(errorMessage);
          } else {
            setData(res.html);
          }
        })
        .catch((errorData: any) => {
          setError({
            title: "Erro ao importar página",
            message: errorData.message,
          });
        })
        .finally(() => {
          setUrl("");
        });
    }
  }, [url]);

  const fetch = useCallback((value: string) => {
    setUrl(value);
  }, []);

  return { fetch, data, error };
};
