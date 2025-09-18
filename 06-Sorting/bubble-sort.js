// Сортировка методом "пузырька"
// bubble

// [5, 1, 3, 4, 0]
// [1, 5, 3, 4, 0]
// [1, 3, 5, 4, 0]
// [1, 3, 4, 5, 0]
// [1, 3, 4, 0, 5]
// [1, 3, 0, 4, 5]
// [1, 3, 0, 4, 5]
// [1, 0, 3, 4, 5]
// [0, 1, 3, 4, 5]



function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}



console.time('task');
// вызов функции или блок кода
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.timeEnd('task');