export const getLocalStorage = (key: string) => {
  if (typeof window === "undefined" || !window.localStorage.getItem(key))
    return {};

  try {
    return JSON.parse(window.localStorage.getItem(key) || "");
  } catch (error) {
    return window.localStorage.getItem(key) || "";
  }
};

export const setLocalStorage = (key: string, value: object) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(key, JSON.stringify(value));
};
