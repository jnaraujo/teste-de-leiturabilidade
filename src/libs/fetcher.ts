export default async function fetcher(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const res = await fetch(input, init);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}
