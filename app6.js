// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.


	let a = "i am in the easycode";
	let b = "";
	
	for (let i = 0; i < a.length; i++) {
        if (a[i - 1] == ' ' || i == 0) {
           b += a[i].toUpperCase();
        } 
        else {
            b += a[i];
        }
	}
    console.log(b);
    
// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let a2 = "tseb eht ma i";
let b2 = "";

for (let i = a2.length - 1; i >= 0; i--) {
    b2 += a2[i];
}
console.log(b2);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let a3 = 1;

for (let i = 1; i <= 10; i++) {
    a3 *= i;
}
console.log(a3);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let a4 = "JavaScript is a pretty good language";
let b4 = "";

a4 = a4.split(" ");

for (let i = 0; i < a4.length -1; i++) {

        b4 += a4[i][0].toUpperCase();
        b4 += a4[i].substring(1);

}
console.log(b4);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let a5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of a5) {
    if (value % 2 == 0) continue;
    console.log(value);
}

// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: "denis",
    work: "easycode",
    age: 29
}

for (let value in list) {
    if (typeof(list[value]) !== "string") continue;
    list[value] = list[value].toUpperCase();
    console.log(list[value]);
}

let user = {"name":"Smith", age: 30};
console.log(user.name);
console.log(+'-' + 2);
let str = '123';
let result = +str;
console.log(typeof(result), result);

let foo = { str: 'test' }; 
console.log(foo && foo.str);

let arr = [];
arr[500] = 1;
console.log(arr);

var x = 1; 
if (x) {
  var x = 2; 
  console.log(x);
} 
console.log(Boolean(undefined)); 

console.log(typeof NaN);

const z = 1;
z = 20;
z++
console.log(z);