// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 100,
    height: 50,
    getSquare: function () {
        let result = 0;
        result = rectangle.width * rectangle.height;
        return result;
    }
};
console.log(rectangle.getSquare());

// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 100,
    discount: '15%',
    getPrice: function () {
        console.log(this.price);
    },
    getPriceWithDiscount: function () {
        console.log(this.price - (this.price / 100 * parseInt(this.discount)));
    }

};
price.getPrice();
price.getPriceWithDiscount();

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

let newObject = {
    height: 10,
    upHeight: function () {
        return this.height + 1;
    }
};
console.log(newObject.upHeight());

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    value: 1,
    double: function() {
        this.value = this.value * this.value;
        return this;
        
    },
    plusOne: function() {
        this.value = this.value + 1;
        return this;
    },
    minusOne: function() {

        this.value = this.value - 1;
        return this;
    }
};
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);


// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

function getAllPrice() {
    return this.price * this.value;
}

let newLot = {
    price: 10,
    value: 5,
    getAllPrice
};


console.log(newLot.getAllPrice());

// Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

let newLot2 = {
    price: 10,
    value: 5,
    getAllPrice
};

console.log(newLot2.getAllPrice());

//! const anotherProd = {
//!     price: 20,
//!     counts: 10,
//!   }
  
//!  prod.getTotalPrice.call(anotherProd)

// Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = {
    width: 53,
    height: 10
};
let getSquare = function() {
    return this.width * this.height;
};

console.log(getSquare.call(sizes));

// 4.  
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};
console.log(element.getHeight);
let getElementHeight = function() {
    return element.height;
};


console.log(getElementHeight());