import { useCallback, useState } from "react";
import handleImport from "../libs/ImportExternalPage";

interface IError {
  title: string;
  message: string;
}

export const useImportExternalPage = () => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError | null>(null);

  const fetch = useCallback(async (value: string) => {
    setData("");
    setLoading(true);
    handleImport(value)
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
        setLoading(false);
      });
  }, []);

  return { fetch, data, error, loading };
};
