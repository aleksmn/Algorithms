function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Текущий элемент для вставки
        let j = i - 1;

        // Сдвигаем элементы, которые больше ключа, на одну позицию вперед
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Вставляем ключ на его правильное место
        arr[j + 1] = key;
    }
    return arr;
}


console.log(insertionSort([2, 1, 9, 76, 4]))