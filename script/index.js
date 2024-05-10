import { getData } from "./fetchApi.js";
getData();
export function newsElement(newsData, authors) {
  const newsContainerElement = document.querySelector("#news-container");
  let newsElement = "";
  for (const news of newsData) {
    const formattedDate = formatDate(news.created_at);
    const author = getAuthor(news.author_id, authors);
    newsElement += `<article id="news">
        <div class="news-image">
        <img src="./public/${news.image_url}">
        <div class="image-action">
        <h3> By: ${author.name}</h3>
         <div class="image-action-icon">
             <i class="bi-eye"></i>
             <a class="bi-link-45deg"></a>
         </div>
            </div>
        </div>
        <div class="news-context">
        <div class='context'> 
        <p class="date"> ${formattedDate}</p>
        <h1>${news.title} </h1>
        <p> ${news.body}</p>
         </div>
         <div class='read-more'> 
         <p> Read Article </p>
         <i class="bi-arrow-right"></i>
         </div>
        </div>    
        </article>`;
  }
  newsContainerElement.innerHTML = newsElement;
}

function getAuthor(id, authors) {
  let authorData = null;
  for (const author of authors) {
    if (id === author.id) {
      authorData = author;
    }
  }
  return authorData;
}

function formatDate(newDate) {
  const date = new Date(newDate);
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return formattedDate;
}
