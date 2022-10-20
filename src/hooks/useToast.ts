import { useCallback } from "react";
import { toast } from "react-toastify";
import { getCookie, setCookie } from "../utils/readingEase";

interface ToastProps {
  saveCookie?: string;
}

type IStatus = "success" | "error" | "info";

export const useToast = ({ saveCookie }: ToastProps) => {
  const cookie = getCookie(saveCookie || "");

  const showToast = useCallback((message: string, status: IStatus) => {
    if (cookie) return;

    toast[status](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setCookie(saveCookie || "", "true");
  }, []);

  return { showToast };
};
