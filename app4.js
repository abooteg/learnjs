// Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let value;
value = "hidden";
if (value == "hidden") {
    value = "visible";
} else {
    value = "hidden";
}
console.log(value);

// Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
//  если меньше нуля - строку “less then zero”;
//  если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

 value = 12;
    if (value == 0) {
        value = 1;
    } else if (value < 0) {
        value = "less then zero";
    } else if (value > 0) {
        value *=10;
    }
console.log(value);

// Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
};

if (car.age > 5) {
    car.needRepair = true;
    console.log("Need Repair");
} else {
    car.needRepair = false;
}
console.log(car.needRepair);

// Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

// // проверяем что цена и скинда не являются NaN так как это важно при расчетах
// if (!isNaN(price) && !isNaN(discount)) {
//     const priceWithDiscount = price - (price * (discount / 100));
//     console.log(priceWithDiscount)
//   } else {
//     console.log(price);
//   }


let item = { 
    name: 'Intel core i7', 
    price: '150$',
    discount: '15%'
};
let price = parseInt(item.price);
let discount = parseInt(item.discount);
if (!isNaN(price) && !isNaN(discount)) {
    item.priceWithDiscount = price - price * discount / 100;
    console.log(item.priceWithDiscount + "$");
} else if (item.discount == undefined) {
    console.log(item.price);
}


// Дан следующий код:

// let product = {
//     name: “Яблоко”,
//     price: “10$”
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log("Товаров не найдено");
}
