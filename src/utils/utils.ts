import nookies from "nookies";

export function easeResultToExample(value: number) {
  if (value > 75) return "um estudante do 1º ao 5º ano";
  if (value > 50) return "um estudante do 6º ao 9º ano";
  if (value > 25) return "um estudante do ensino médio";

  return "um estudante universitário";
}

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
