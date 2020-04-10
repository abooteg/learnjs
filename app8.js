/* <p>Создать функцию, которая принимает число <strong>n</strong> и возвращает массив, заполненный числами от 1 до <strong>n</strong>: </p><p><em>getArray(10); // [1,2,3,4,5,6,7,8,9,10]</em></p> */

function getArray(num) {
    let arrResult = [];
    for (i = 1; i <= num; i++) {
        arrResult.push(i);
    }
    return arrResult;
}
console.log(getArray(10));

// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.

function doubleArray(arr) {
    return arr.concat(arr);
}

console.log(doubleArray([1,2,3]));


// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.

function changeCollection() {
    let newArr = [];
    for (i = 0; i <= arguments.length; i = i + 1) {
        if (Array.isArray(arguments[i]) === true) {
            arguments[i].shift();
            newArr.push(arguments[i]);
        }
    }
return newArr;
}
console.log(changeCollection([1,2,3],[1,2,3,2,3]))

// Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки 


const users = [
    {
      "_id": "5e36b779dc76fe3db02adc32",
      "balance": "$1,955.65",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Berg Zimmerman",
      "gender": "male"
    },
    {
      "_id": "5e36b779d117774176f90e0b",
      "balance": "$3,776.14",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Deann Winters",
      "gender": "female"
    },
    {
      "_id": "5e36b779daf6e455ec54cf45",
      "balance": "$3,424.84",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Kari Waters",
      "gender": "female"
    }
  ];
  
  
  function filterUsers(arr, key, value) {
    let newArr = [];
    // Проверяем на наличие не переданных аргументов
    if (arguments.length !== 3) {
        return new Error('Error message');
    }
    for (i = 0; i < arr.length; i++) {
            for (let keys in arr[i]){
                if (keys === key && arr[i][keys] === value) {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;

  }
  console.log(filterUsers(users, "age", 36));

  