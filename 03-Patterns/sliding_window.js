// Напишите функцию под названием maxSubarraySum, 
// которая принимает массив целых чисел и число n. 
// Функция должна вычислить максимальную сумму 
// n последовательных элементов в массиве.

// Примеры использования функции:
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 2]) // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 2]) // 17
// maxSubarraySum([4, 2, 1, 6, 1]) // 6
// maxSubarraySum([1, 4, 2, 2, 4]) // 13
// maxSubarraySum([1, 4]) // null


// решение с вложенным циклом
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))


// рефакторинг
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))