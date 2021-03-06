// Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:
// Условия:
// - В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при
// этом он должен быть всегда выровнен по правому краю.
// - Количество пользователей может быть любым.
// - Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой
// то.
// - В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th
// которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
];

// * Объявление переменных
const container = document.body.querySelector("div.container");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
let tableHead = {
  numbers: "#",
  name: "Name",
  email: "Email",
  gender: "Gender",
  age: "Age",
  phone: "Phone",
  registered: "registered",
  balance: "Balance",
};

// * Добавление на страницу основных элементов таблицы
container.insertAdjacentElement("afterbegin", table);
table.insertAdjacentElement("afterbegin", thead);
table.insertAdjacentElement("beforeend", tbody);

// * Добавление заголовков таблицы
function addTableHead(el) {
  const tr = document.createElement("tr");
  thead.insertAdjacentElement("afterbegin", tr);
  for (let key in el) {
    tr.insertAdjacentHTML("beforeend", `<th id=${key}>${el[key]}</th>`);
  }
}
addTableHead(tableHead);

// * Добавление инфомрации в таблицу из объекта
function addTableBody(el, table) {
  let i = 1;
  el.forEach((element) => {
    tbody.insertAdjacentHTML("beforeend", `<tr id="${i}"><th>${i}</th></tr>`);
    for (let userKeys in table) {
      for (let userKeys1 in element) {
        if (userKeys === userKeys1) {
          document
            .getElementById(i)
            .insertAdjacentHTML("beforeend", `<th>${element[userKeys]}</th>`);
        }
      }
    }
    i++;
  });
}
addTableBody(users, tableHead);

function addTotalBalance(user, table){
  let totalBalance = 0;
  let colspanN = Object.keys(table).length;
  user.forEach(element => {
    totalBalance += element.balance;
  });
  tbody.insertAdjacentHTML("beforeend", `<tr><th class="totalBalance" colspan="${colspanN}">Total Balance: ${totalBalance}</th></tr>`);
}
addTotalBalance(users, tableHead);