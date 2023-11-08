const API_URL = "https://api.github.com/users/rawadabu";

export async function getRepos() {
  const res = await fetch(`${API_URL}/repos`);

  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}
