// Получаем число Pi
let numberPi;
numberPi = Math.PI;
console.log(numberPi);

// Округляем число Pi до сотых
numberPi = numberPi.toFixed(2);
console.log(numberPi);

// Находим максимальное и минимальное значение численного ряда
let numberMax;
let numberMin;
numberMax = Math.max(5, 11, 16, 12, 51, 12, 13, 51);
console.log('Максимальное число из ряда:' + ' ' + numberMax);
numberMin = Math.min(5, 11, 16, 12, 51, 12, 13, 51);
console.log('Минимальное число из ряда:' + ' ' +  numberMin);

// Получаем случайное число и окгурляем его до двух цифр после запятой
let numberRandom;
numberRandom = (Math.random() * 100).toFixed(2);
numberRandom = Number(numberRandom);
console.log(numberRandom);

// Получаем случайное целое число от 0 до X. X - любое произвольное число.

let numberRandomInt;
numberRandom = Math.random() * 10;
numberRandom = Math.floor(numberRandom);
numberRandom = Number(numberRandom);
console.log(numberRandom);

// Проверим результат вычисления 0.6 + 0.7 - и приводим к нормальному виду (1.3)

let summa;
summa = 0.6 + 0.7;
console.log(summa);
summa = Math.floor(summa * 100 + 1) / 100;
console.log(summa);

// Получаем число из строки ‘100$’

let newString = '100$';
console.log(newString); 
newString = parseInt(newString);
console.log(newString);