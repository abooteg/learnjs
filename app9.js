// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
// callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity” firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,” firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки

function firstFunc(arr, fn) {
    let newArr = [];
    let returnValue = "";
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    for (let i = 0; i < newArr.length; i++) {
        returnValue += newArr[i];
    }
    if (returnValue[returnValue.length - 1] === " ") {
        returnValue = returnValue.substring(0, returnValue.length - 1);
    }
    return `New value: ${returnValue}`;
}

function handler1(el) {
    let newEl = "";
    newEl += el[0].toUpperCase();
    newEl += el.substring(1);
    return newEl;
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
    el *= 10;
    el = String(el);
    el = el + ", ";
    return el;
}

console.log(firstFunc([10, 20, 30], handler2) )

function handler3(el) {
    return `${el.name} is ${el.age}, `;
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
    let newEl = "";
    for (let i = el.length - 1; i >= 0; i--) {
        newEl += el[i];
    }
    return `${newEl}, `;
}

console.log(firstFunc(['abs', '123'], handler4));


// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.
// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.

function every(arr, fn) {
    if (Array.isArray(arr) !== true || typeof(fn) !== "function") {
        return new Error('Error message');
    } 
    for (let i = 0; i < arr.length; i++) {
       if (fn(arr[i]) === false) {
           return false;
       }
    }
    return true;
}

function handler1(element) {
    return element > 5;
}

console.log(every([6,7,7], handler1));