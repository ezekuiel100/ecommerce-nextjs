export function api(path: string) {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + path;
  return fetch(url);
}
