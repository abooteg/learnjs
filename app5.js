// Записать в виде switch case следующее условие:
// if (a === ‘block’) {
//     console.log(‘block’)
// } else if (a === ‘none’) {
//     console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
//     console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = 'block';

switch (a) {
    case 'block': console.log(a);
    break;
    case 'none': console.log(a);
    break;
    case 'inline': console.log(a);
    break;
    default: console.log('other');
}

// Записать данное условие в виде тернарного оператора

// let b = 'hidden';

// if (b === 'hidden') {

//   b = 'visible';

// } else {

//   b = 'hidden';

// }

let b = 'hidden';
b === 'hidden' ? b = 'visible' : b = 'hidden';
console.log(b);

// Записать данное условие в виде тернарного оператора

// let c = 0;


// if (c === 0) {

//   c = 1;

// } else if (c < 0) {

//   c = 'less then zero';

// } else {

//   c *= 10;

// }

let c = 0;
c === 0 ? c = 1 : c < 0 ? c = 'less then zero' : c *= 10;
console.log(c);