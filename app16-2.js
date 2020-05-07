// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let ul = document.body.querySelector("ul");

function addLi(el){
    let newLi = `<li class="new-item">item ${el.children.length+1}`;
    el.insertAdjacentHTML("beforeend", newLi);
    return el;
}
addLi(ul);
addLi(ul);
addLi(ul);
addLi(ul);


// В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).

let linkArr = ul.querySelectorAll("a");
function addStrong(el) {
    el.forEach(element => {
        element.innerHTML = `<strong>${element}</strong>`;
    });
}
addStrong(linkArr);

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

let img = document.createElement("img");
img.setAttribute("src", "https://hostingrust.ru/images/game/theisle.jpg");
img.setAttribute("alt", "Dino");
document.body.insertBefore(img, document.body.firstChild);


// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let mark = document.body.querySelector("mark");
mark.insertAdjacentText("beforeend", "green");
mark.classList.add("green");
// console.log(mark);


// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let allLi = document.body.querySelectorAll("li");
let newArr = Array.from(allLi);

function revers(el){
    el.sort(function (previous, next) {
        return next - previous;
        });
    for(let i = 0; i < allLi.length; i++){
        allLi[i].remove();
    }
    for(let i = 0; i<el.length;i++){
        ul.appendChild(el[i]);
    }
    allLi = document.body.querySelectorAll("li");
    return allLi;
}
revers(newArr);
console.log(allLi);
