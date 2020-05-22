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
const tableHeads = {
  index: "#",
  name: "Name",
  age: "Age",
  balance: "Balance"
};
const button = document.querySelector(".sort");
button.addEventListener("click", balanceSorter);
// Генерируем thead
function generateThead(tableHeads){
  const thead = document.createElement("thead"); 
  const tr = generateTr(tableHeads, "th"); 
  thead.appendChild(tr);
  return thead;
}
// Генерируем tbody
function generateTbody(tableHeads, items){
  const tbody = document.createElement("tbody");
  items.forEach((item, index) => {
    item.index = index+1;
    const itemSchema = generetaItemsSchema(tableHeads, item);
    const tr = generateTr(itemSchema, "td");
    tbody.appendChild(tr);
  });
  return tbody;
}

function generetaItemsSchema(tableHeads, item){
  const itemSchema = Object.keys(tableHeads).reduce((acc, key) => {
    if(key in item) {
      acc[key] = item[key];
    }
    return acc;
  }, {});
  return itemSchema;
}

function generateTr(tableHeads, tagName = "td"){
 const tr = document.createElement("tr");
 Object.values(tableHeads).forEach(val => {
   const td = document.createElement(tagName);
   td.textContent = val;
   tr.appendChild(td);
 });
return tr;
}

function generateTableTemplate(){
  const table = document.createElement("table");
  return table;
}

function generateTotalBalance(tableHeads, items){
  const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0);
  const tr = document.createElement("tr");
    const td = document.createElement("td");
    const columnCounts = Object.keys(tableHeads).length;
    td.insertAdjacentHTML("beforeend", `Total balance: <b>${total}</b>`);
    td.setAttribute("colspan", columnCounts);
    td.setAttribute("align", "right");
    tr.appendChild(td);
    return tr;
}

function initTable(tableHeads, items){
  const container = document.querySelector(".container");
  const table = generateTableTemplate();
  const header = generateThead(tableHeads);
  const body = generateTbody(tableHeads,items);
  const total = generateTotalBalance(tableHeads, items);
  table.appendChild(header);
  container.appendChild(table);
  table.appendChild(body);
  table.appendChild(total);
}
let sorter = "up";
function balanceSorter(){
  
  if(sorter == "down"){
    users.sort((a,b) => a.balance > b.balance ? -1: 1);
    const container = document.querySelector(".container");
    container.innerHTML = "";
    initTable(tableHeads, users);
    sorter = "up";
    return;
  }
  users.sort((a,b) => a.balance > b.balance ? 1: -1);
  const container = document.querySelector(".container");
  container.innerHTML = "";
  initTable(tableHeads, users);
  sorter = "down";
}

initTable(tableHeads, users);