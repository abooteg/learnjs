// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multiply() {
    let result = 1;
    if (arguments.length === 0) {
        return 0;
    }
    for (let i = 1; i <= arguments.length; i++) {
        result *= arguments[i-1];
    }
    return result;
}
console.log(multiply());


// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(stroka) {
    let strokaResult = "";
    stroka = String(stroka);
    for (let i = stroka.length - 1; i >= 0; i--) {
        strokaResult += stroka[i];
    }
    return strokaResult;
}
console.log(reverseString());

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 

// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

// подсказка: для получения кода используйте специальный метод 

function getCodeStringFromText(str) {
    str = String(str);
    let strokaResult = "";
    if (str === undefined) {
        console.log("Пустая строка");
        return;
    }
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            strokaResult += str.charCodeAt(i) + " ";
        } else {
            strokaResult += str.charCodeAt(i);
        }
    }
    return strokaResult;
}
console.log(getCodeStringFromText("hello"));


// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

// //* Генерируем рандомное число от 0 до 10
// function numGenerator() {  
// let numberRandom; 
// numberRandom = Math.random() * 10;
// numberRandom = Math.floor(numberRandom);
// numberRandom = Number(numberRandom);
// console.log(numberRandom);
// return numberRandom;
// }

// //* Проверяем число на соотетствие условиям
// function numSravnenie(number) {
//     if (typeof(number) !== "number"){
//         return new Error("Please provide a valid number");
//     } else if (number < 0 && number >= 10) {
//         return new Error("Please provide number in range 0 - 10");
//     }  else {
//         return number;
//     }
// }
// //* Проверяем совпало ли число с рандомным
// function numResult(numberRandom, number) {
//     if (number === numberRandom) {
//         return "Вы выйграли";
//     } else {
//         return `Вы не угадали! Ваше число ${number}, а выпало число ${numberRandom}`;
//     }
// }

// console.log(numResult(numGenerator(),numSravnenie("5")));

function guessTheNumber(num) {
    let numberRandom; 
    numberRandom = Math.floor(Math.random(0) * 11);
    

    if (typeof(num) !== "number"){
        return new Error("Please provide a valid number");
    }  
    if (num <= 1 && num >= 10) {
        return new Error("Please provide number in range 0 - 10");
    }
    
    if (num === numberRandom) {
        return "You win!";
    } else {
        return `You are lose, your number is ${num}, the random number is ${numberRandom}`;
    }

}

console.log(guessTheNumber(1));