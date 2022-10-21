import axios from "axios";
import { useCallback, useState } from "react";

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
    axios
      .get("/api/external", {
        params: {
          url: value,
        },
      })
      .then((res) => {
        setData(res.data.html);
      })
      .catch((err) => {
        setError({
          title: "Erro ao importar página",
          message: err.response.data.message || "internal server error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { fetch, data, error, loading };
};
