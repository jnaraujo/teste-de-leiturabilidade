import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { getCookie, setCookie } from "../utils/cookies";

interface ToastProps {
  saveCookie?: string;
}

type IStatus = "success" | "error" | "info";

export const useToast = ({ saveCookie }: ToastProps) => {
  const cookie = getCookie(saveCookie || "");

  const showToast = useCallback((message: string, status: IStatus) => {
    // if (cookie) return;

    if (status === "success") toast.success(message, { position: "top-left" });
    if (status === "error") toast.error(message, { position: "top-left" });
    if (status === "info") toast(message, { position: "top-left" });

    setCookie(saveCookie || "", "true");
  }, []);

  return { showToast };
};
