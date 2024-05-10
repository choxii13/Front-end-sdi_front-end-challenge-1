import { newsElement } from "./index.js";

async function fetchApi(api) {
  const response = await fetch(api);
  if (!response.ok) {
    return alert("An error occured in fetching API");
  }
  const data = await response.json();
  return data;
}

export async function getData() {
  const newsData = await fetchApi("./data/news.json");
  const authors = await fetchApi("./data/authors.json");
  newsElement(newsData, authors);
}
