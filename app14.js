// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

function func(...value) {
    let newObj = {
        first: "",
        second: []
    };
    const [first, ...second] = value;
    [newObj.first, newObj.second] = [first, second];
    return newObj;
}

console.log(func("a", "b", "c", "d"));

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

function getInfo(org) {
    const {name = "Unknown"} = org;
    console.log(`${"Name: " + name}`);
    const {info: {partners: [partner1 = "Unknown", partner2 = "Unknown"]}} = org;
    console.log(`${"Parnters: " + partner1 + ", " + partner2}`);
}

getInfo(organisation);