// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

const btnMsg = document.querySelector("#btn-msg");
const btnMsgDataText = btnMsg.getAttribute("data-text");
// btnMsg.addEventListener("click", (e) => {
//   alert(`${btnMsgDataText}`);
// });

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

function btnSetColor(btn) {
  btn.addEventListener("mouseover", (e) => {
    e.target.classList.add("redbtn");
  });
  btn.addEventListener("mouseout", (e) => {
    e.target.classList.remove("redbtn");
  });
}
// btnSetColor(btnMsg);

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
const tag = document.querySelector("#tag");
function anyNodesClick() {
    document.addEventListener("click", (e) => {
        if(tag.lastChild.nodeValue !== "Tag:") {
            tag.lastChild.remove();
        }
        tag.insertAdjacentHTML("beforeend", ` ${e.target.nodeName}`);
    });
    
}
// anyNodesClick();

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 

const btnGenerate = document.querySelector("#btn-generate");
const ul = document.querySelector("ul");
function addLi(btn) {
    
    btn.addEventListener("click", (e) => {
        ul.insertAdjacentHTML("beforeend", `<li>Item ${ul.children.length+1}</li>`);
    });
}
addLi(btnGenerate);