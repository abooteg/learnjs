// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

const minus = function (firstValue) {
    let result = 0;
    return function(lastValue) {
        if (isNaN(lastValue)) {
            lastValue = 0;
        } 
        if (isNaN(firstValue)) {
            firstValue = 0;
        }
        result = firstValue - lastValue;
        return console.log(result);
    }
};
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)
let lastResult = 0;
function multiplyMaker(firstValue) {
    let resultValue = 0;
    return function(lastValue) {
        if (lastResult != 0) {
            firstValue = lastResult;
        }
        resultValue = firstValue * lastValue;
        lastResult = resultValue;
        return resultValue;
    };
}
const multiply = multiplyMaker(2);
// console.log(multiply(2));
// console.log(multiply(1));
// console.log(multiply(3));
// console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const newModule = {
    newString: "",
    setString: function(string) {
        if(!string){
            return this.newString = "";
        }
        if(typeof(string) === "number"){
            return this.newString = String(string);
        }
        return this.newString = string;
    },
    getString: function() {
        console.log(this.newString);
        return this.newString;
    },
    getStringLenght: function() {
        console.log(this.newString.length);
        return this.newString.length;
    },
    getReverseString: function() {
        let newEl = "";
        for (let i = this.newString.length - 1; i >= 0; i--) {
            newEl += this.newString[i];
        }
        console.log(newEl);
        return newEl;
    }

};
newModule.setString("awdawd123");
// newModule.getString();
// newModule.getStringLenght();
// newModule.getReverseString();


// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const newModule2 = {
    value: 0,
    setNewValue: function(getValue) {
        this.value = getValue
        return this;
    },
    resultPlus: function(getValue) {
        this.value += getValue;
        return this;
    },
    resultMultiply: function(getValue) {
        this.value *= getValue;
        return this;
    },
    resultMinus: function(getValue) {
        this.value -= getValue;
        return this;
    },
    resultSplit: function(getValue) {
        this.value /= getValue;
        return this;
    },
    resultUpper: function(getValue) {
        this.value = Math.pow(this.value, getValue);
        return this;
    },
    getResult: function() {
        return this.value;
    }
    
};

console.log(newModule2.setNewValue(10).resultPlus(100).resultSplit(10).resultMinus(9).resultUpper(3).getResult());

