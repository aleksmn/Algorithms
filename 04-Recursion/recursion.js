// Рекурсия - функция, которая вызывает саму себя
function countDown(num) {
    // условие выхода из рекурсии
    if (num <= 0) {
        console.log("Пуск!");
        return;
    }
    console.log(num);
    num--;
    // рекурсия
    countDown(num);
}

countDown(3)



function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(7))

console.log(7 + 6 + 5 + 4 + 3 + 2 + 1)











function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5))



// halper method recursion
function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])


// pure recursion
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    return newArr.concat(collectOddValues(arr.slice(1)));
}

console.log(collectOddValues([1, 2, 3, 4, 5, 8, 222, 223]))



// Напишите рекурсивную функцию с именем flatten, 
// которая принимает массив массивов и возвращает 
// новый массив со всеми значениями в "плоском" виде (без вложенных массивов).


// Примеры
// flatten([1, 2, 3, [4, 5] ]))         // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]))    // [1, 2, 3, 4, 5]


function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}