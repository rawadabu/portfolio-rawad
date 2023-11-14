const API_URL = "https://api.github.com/users/rawadabu";
const SECTIONS_PATH = "src/data/sections.json";

export async function getRepos() {
  const res = await fetch(`${API_URL}/repos`);

  if (!res.ok) throw Error("Failed getting repos");

  const data = await res.json();
  return data;
}

export async function getSections() {
  const res = await fetch(`${SECTIONS_PATH}`);

  if (!res.ok) throw Error("Failed getting sections");

  const data = await res.json();
  return data;
}
