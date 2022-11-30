import nookies from "nookies";

export function getCookie(key: string) {
  const cookies = nookies.get();
  return cookies[key];
}

export function setCookie(
  key: string,
  value: string,
  maxAge: number = 24 * 60 * 60
) {
  nookies.set(null, key, String(value), {
    maxAge,
  });
}
