// Напишите функцию под названием same, которая принимает два массива. 
// Функция должна возвращать true, если каждое значение в первом массиве 
// имеет соответствующее значение, возведенное в квадрат, во втором массиве. 
// Частота значений должна быть одинаковой.

// "Наивное решение"
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// same([1,2,3,2], [9,1,4,4])



// Frequency counter (счетчик частот)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])



// Даны две строки, напишите функцию, чтобы определить, является ли 
// вторая строка анаграммой первой. Анаграмма — это слово, фраза 
// или имя, образованное перестановкой букв другого слова, 
// например, "cinema", образованное из "iceman".


function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')



// Напишите функцию под названием sameFrequency. 
// Даны два положительных целых числа, определите, 
// имеют ли эти два числа одинаковую частоту цифр.


function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        /*if (countNum1[strNum1[i]] === undefined) {
          countNum1[strNum1[i]] = 0
        }
        countNum1[strNum1[i]]++;*/
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    // for(let key in countNum2){
    //   if(countNum1[key] !== countNum2[key]) return false;
    // }
    return true;
}


console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false