

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let k = i + 1; k < arr.length; k++) {
            // console.log(i, k)
            if (arr[k] < arr[minIndex]) {
                minIndex = k;
            }
        }

        // swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

    }
    return arr;
}


let arr = [8, 1, 5, 3, 0, 2]

console.log(selectionSort(arr))