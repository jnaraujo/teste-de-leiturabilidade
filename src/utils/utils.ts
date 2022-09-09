import nookies from "nookies";

export function easeResultToExample(value) {
  if (value > 75) return "um estudante do 1º ao 5º ano";
  if (value > 50) return "um estudante do 6º ao 9º ano";
  if (value > 25) return "um estudante do ensino médio";

  return "um estudante universitário";
}

export function getCookie() {
  return nookies.get(null, {}).toastedInfo;
}

export function setCookie(value: string | boolean) {
  nookies.set(null, "toastedInfo", String(value), {
    maxAge: 24 * 60 * 60,
  });
}
