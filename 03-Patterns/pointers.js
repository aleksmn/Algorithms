// Напишите функцию под названием sumZero, 
// которая принимает отсортированный массив целых чисел.
// Функция должна найти первую пару, сумма которой равна 0. 
// Верните массив, который включает оба значения, 
// сумма которых равна нулю, или undefined, если такая пара не существует.

// Примеры использования функции:
// sumZero([-3, -2, -1, 0, 1, 2, 4]) // [-3, 3]
//              ^             ^
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined



// Наивное решение: используется вложенный цикл
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))


// Рефакторинг кода (используем поинтеры)


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left ++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))




// Напишите функцию под названием countUniqueValues, 
// которая принимает отсортированный массив целых чисел.
// и считает количество уникальных значений в этом массиве.


// Примеры использования функции:
// countUniqueValues([1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 2, 2, 3, 3, 4, 10]) // 5
// countUniqueValues([]) // 0

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]))




// Напишите функцию под названием threeSum, 
// которая принимает отсортированный массив целых чисел.
// Функция должна найти первую тройку, сумма которой равна 0. 
// Верните массив, который включает оба значения, 
// сумма которых равна нулю, или undefined, если такая пара не существует.


// threeSum([-4, -2,-1, 0, 1, 2, 3, 4])   [-4, 1, 3]


function threeSum(arr) {
    arr.sort((a, b) => a - b); // Сортируем массив
    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Пропускаем дубликаты

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++; // Пропускаем дубликаты
                while (left < right && arr[right] === arr[right - 1]) right--; // Пропускаем дубликаты
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-4, -2, 1, 2, -1, 0, 3, 4]));