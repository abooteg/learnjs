function isParent(parent, child) {
  let newParent = child.parentElement;
  while (newParent != null) {
    if (newParent === parent) {
      return true;
    }
    newParent = newParent.parentElement;
  }
  return false;
}

console.log(
  isParent(document.body.children[0], document.querySelector("mark"))
);
// true так как первый див является родительским элементом для mark

console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);
// false так ul НЕ является родительским элементом для mark

document.body.style.background = 'red'; // сделать фон красным

setTimeout(() => document.body.style.background = '', 3000); // вернуть назад