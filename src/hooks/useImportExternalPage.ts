import fetcher from "@/libs/fetcher";
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

    const fetchUrl = new URLSearchParams({ url: value });

    try {
      const res = await fetcher(`/api/external?${fetchUrl}`);
      setData(res.html);
    } catch (err: any) {
      setError({
        title: "Error",
        message: err?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetch, data, error, loading };
};
