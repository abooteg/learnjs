// 1. Найти параграф и получить его текстовое содержимое (только текст!)

let paragraph = document.querySelector("p");

console.log(paragraph.textContent);


// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function returnObj(domNode){
    let nodesType = domNode.nodeType;
    let nodesName = domNode.nodeName;
    let childrens = domNode.childNodes.length;
    return `Node Type: ${nodesType}, Node Name: ${nodesName}, Child Nodes: ${childrens}`;
}
let result1 = returnObj(paragraph);
console.log(result1);

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри 
// списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

let ul = document.querySelector("ul");

function getTextFromUl(link) {
  let newArr = [];
  for (let i = 0; i < link.children.length; i++) {
    newArr.push(link.children[i].textContent);
  }
  return newArr;
}
let result2 = getTextFromUl(ul);
console.log(result2);

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

function toText(el) {
    for(let i = 0; i < el.childNodes.length; i++){
        console.log(el.childNodes[i].nodeType);
        if(el.childNodes[i].nodeType === 3) {
            el.childNodes[i].textContent = "-text-";
        }
    }
    return el.innerHTML;
}
let result3 = toText(paragraph);
console.log(result3);
