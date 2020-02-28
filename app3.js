// Создать объект с полем product, равным ‘iphone’

let value = {
    product: 'iphone'
};
console.log(value);

// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

value.price = 1000;
value.currency = "dollar";
console.log(value);

// Добавить поле details, которое будет содержать объект с полями model и color
value.details = {
    model: "7plus",
    color: "red"
};
console.log(value);
