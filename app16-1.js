
// 1. Найти в коде список ul и добавить класс “list”

let ul = document.querySelector("ul");
ul.classList.add("links");
// console.log(ul);

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// console.log(document.body);
function someLink(){
    let linkSrc;
    let i = 0;
    while(i < document.body.childNodes.length){
        if(document.body.childNodes[i].innerText === "Some link"){
            linkSrc = document.body.childNodes[i];
            linkSrc.setAttribute("id", "link");
            return linkSrc;
        }
        i++;
    }
}
let result = someLink();
// console.log(result);

// 3. На li через один (начиная с самого первого) установить класс “item”

let ul1 = document.querySelector("ul");

function addItemClass(el){
    for(let i = 0; i < el.children.length; i++){
        if(i === 0 || i % 2 === 0){
            el.children[i].classList.add("item");
        }
    }
    return el;
}
let result1 = addItemClass(ul1);
// console.log(result1);


// 4. На все ссылки в примере установить класс “custom-link”

let allLinks = document.body.querySelectorAll("a");
allLinks.forEach(function (element){
    element.classList.add("custom-link");
});
console.log(allLinks);