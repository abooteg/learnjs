// Получаем первую и последнюю буквы строки

let string = "some test string";
let stringLength = string.length;
//  console.log(stringLength);
console.log("Первая буква строки: " + string[0]);
console.log("Последняя буква строки:" + string[stringLength - 1]);

// Делаем первую и последнюю буквы в верхнем регистре

console.log("Первая буква в верхнем регистре: " + string[0].toUpperCase());
console.log(
  "Последняя буква в верхнем регистре: " +
    string[stringLength - 1].toUpperCase()
);

// Ищем положение слова ‘string’ в строке

console.log(string.indexOf("string"));

// Ищем положение второго пробела (“вручную” ничего не считать)
let stringTabPosition = string.indexOf("test");
console.log(string.indexOf(" ", stringTabPosition));

// Получить строку с 5-го символа длиной 4 буквы
let stringTest = string.slice(5, stringLength);
console.log(stringTest.substr(0, 4));

// Получить строку с 5-го по 9-й символы

console.log(string.substring(5, 9));

// Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

string = string.substr(0, stringLength - 6);
console.log(string);

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20;
let b = 16;
a = String(a);
string = a + b;
console.log(string);
