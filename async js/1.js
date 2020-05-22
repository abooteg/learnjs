const btn = document.querySelector("button");
const container = document.querySelector(".container");
function getPosts(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    callback(response);
  });
  xhr.send();
}
btn.addEventListener("click", (e) => {
  getPosts((response) => {
    const fragment = document.createDocumentFragment();
    console.log(response);
    response.forEach((element) => {
      const divCard = document.createElement("div");
      divCard.classList.add("card");
      const divCardBody = document.createElement("div");
      divCard.classList.add("card-body");
      const title = document.createElement("h5");
      title.classList.add("card-title");
      const article = document.createElement("p");
      article.classList.add("card-text");
      title.textContent = element.title;
      article.textContent = element.body;
      divCard.appendChild(divCardBody);
      divCardBody.appendChild(title);
      divCardBody.appendChild(article);
      fragment.appendChild(divCard);
    });
    container.appendChild(fragment);
  });
});
